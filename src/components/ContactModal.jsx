import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose, initialEmail = '' }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [salesforceLeadId, setSalesforceLeadId] = useState(null);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    empresa: '',
    empleados: '11-50',
    puesto: '',
    ofrecenVales: 'No'
  });

  useEffect(() => {
    if (initialEmail) {
      setFormData((prev) => ({ ...prev, correo: initialEmail }));
    }
  }, [initialEmail]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setLoading(false);
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Enviar datos del Paso 1 a Salesforce (Creación de Lead/Contacto)
  const handleStep1Submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      /* 
        AJUSTE CRM SALESFORCE (PASO 1):
        Reemplaza la URL del endpoint por tu webhook de Salesforce Web-to-Lead o API REST.
      */
      const response = await fetch('/api/salesforce/lead-step1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          FirstName: formData.nombre,
          LastName: formData.apellido,
          Email: formData.correo,
          Phone: formData.celular
        })
      }).catch(() => null);

      if (response && response.ok) {
        const data = await response.json();
        setSalesforceLeadId(data.leadId);
      }
    } catch (err) {
      console.warn('Salesforce step 1 sync bypassed for local testing:', err);
    } finally {
      setLoading(false);
      setStep(2);
    }
  };

  // Enviar datos del Paso 2 a Salesforce (Update de Lead/Contacto)
  const handleStep2Submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      /* 
        AJUSTE CRM SALESFORCE (PASO 2):
        Reemplaza la URL del endpoint para actualizar el registro creado previamente.
      */
      await fetch('/api/salesforce/lead-step2', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          LeadId: salesforceLeadId,
          Company: formData.empresa,
          NumberOfEmployees: formData.empleados,
          Title: formData.puesto,
          PlataformaGastos__c: formData.tienePlataformaGastos
        })
      }).catch(() => null);
    } catch (err) {
      console.warn('Salesforce step 2 update bypassed for local testing:', err);
    } finally {
      setLoading(false);
      setStep(3);
    }
  };

  // Generación de URL de Calendly con parámetros pre-llenados
  const fullName = encodeURIComponent(`${formData.nombre} ${formData.apellido}`.trim());
  const emailParam = encodeURIComponent(formData.correo);
  /* Reemplaza "tu-usuario-calendly/15min" por la URL de tu evento real de Calendly */
  const calendlyUrl = `https://calendly.com/d/cp3d-w4f-m6x?name=${fullName}&email=${emailParam}&hide_gdpr_banner=1&primary_color=181f71`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop con Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-violet/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-auto"
          >
            {/* Header del Modal */}
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {step === 1 && 'Paso 1 de 2: Datos de Contacto'}
                  {step === 2 && 'Paso 2 de 2: Información Empresarial'}
                  {step === 3 && 'Diagnóstico Confirmado'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            {/* Contenido según Step */}
            <div className="p-6 sm:p-8">
              {step === 1 && (
                <form onSubmit={handleStep1Submit} className="space-y-4">
                  <div className="text-left mb-6">
                    <h3 className="text-2xl font-extrabold text-brand-darkblue tracking-tight">
                      Agenda tu Demo de Travex
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Ingresa tus datos básicos para iniciar la personalización de tu cuenta.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carlos"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        required
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Ej. Mendoza"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Correo de empresa *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="carlos@tuempresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Celular *
                    </label>
                    <input
                      type="tel"
                      name="celular"
                      required
                      value={formData.celular}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800"
                    />
                  </div>

                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-white bg-brand-darkblue hover:bg-brand-blue shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? 'Guardando...' : 'Siguiente paso →'}
                    </motion.button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleStep2Submit} className="space-y-4">
                  <div className="text-left mb-6">
                    <h3 className="text-2xl font-extrabold text-brand-darkblue tracking-tight">
                      Detalles de tu Organización
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Ayúdanos a preparar el caso de uso perfecto para tu compañía.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Empresa o Razón Social *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa S.A. de C.V."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Número de Empleados *
                      </label>
                      <select
                        name="empleados"
                        value={formData.empleados}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800 bg-white"
                      >
                        <option value="0-10">0-10 empleados</option>
                        <option value="11-50">11-50 empleados</option>
                        <option value="50-100">50-100 empleados</option>
                        <option value="100+">100+ empleados</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Puesto / Cargo *
                      </label>
                      <input
                        type="text"
                        name="puesto"
                        required
                        value={formData.puesto}
                        onChange={handleChange}
                        placeholder="Ej. Director de Finanzas"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      ¿Actualmente cuentan con una plataforma para administración de Gastos y Viaticos? *
                    </label>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      {['Sí', 'No'].map((opcion) => (
                        <button
                          key={opcion}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, tienePlataformaGastos: opcion }))}
                          className={`py-3 rounded-xl font-bold border transition-all ${
                            formData.tienePlataformaGastos === opcion
                              ? 'bg-brand-darkblue text-white border-brand-darkblue shadow-md'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-white bg-brand-darkblue hover:bg-brand-blue shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? 'Finalizando...' : 'Completar y Agendar →'}
                    </motion.button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="space-y-6 text-center">
                  <div className="space-y-2">
                    <span className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-2xl">
                      ✓
                    </span>
                    <h3 className="text-2xl font-extrabold text-brand-darkblue">
                      ¡Gracias por tu interés!
                    </h3>
                    <p className="text-slate-600 font-medium text-sm sm:text-base max-w-lg mx-auto">
                      Hemos recibido tu solicitud con éxito. Nuestro equipo comercial ya está analizando los datos de tu empresa.
                    </p>
                    <p className="text-brand-blue font-bold text-sm">
                      ¿Quieres agilizar el proceso? Agenda directamente tu Llamada de Diagnóstico Gratuita (15 min) con un especialista corporativo en el calendario de abajo.
                    </p>
                  </div>

                  {/* Embedded Calendly iFrame con datos pre-llenados */}
                  <div className="w-full h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50">
                    <iframe
                      src={calendlyUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Calendly Travex"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
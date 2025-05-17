import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Clear status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  return (
    <section className="section pt-28 pb-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-bold text-primary-500 mb-4">Contacto</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre RXvision? Estamos aquí para ayudarte.
            Contacta con nuestro equipo para obtener más información.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Email</h4>
                    <a 
                      href="mailto:andresdeoro16@gmail.com" 
                      className="text-primary-500 hover:underline"
                    >
                      andresdeoro16@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Teléfono / WhatsApp</h4>
                    <a 
                      href="https://wa.me/573226728281" 
                      className="text-primary-500 hover:underline"
                    >
                      +57 322 6728281
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Ubicación</h4>
                    <p className="text-neutral-600">Colombia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-neutral-700 mb-4">
                  Horario de Atención
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-600">
                    <span className="font-medium">Lunes a Viernes:</span> 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-neutral-600 mt-2">
                    <span className="font-medium">Sábados:</span> 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
                
                {formStatus === 'success' && (
                  <div className="bg-success bg-opacity-10 text-success p-3 rounded-lg animate-fade-in">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-lg animate-fade-in">
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
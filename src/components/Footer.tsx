import React from 'react';
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">RXvision</h3>
            <p className="text-neutral-300 mb-6">
              Inteligencia Artificial para Diagnóstico y Educación en Radiología de Tórax
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary-500" />
                <a href="mailto:andresdeoro16@gmail.com" className="hover:text-secondary-500 transition-colors">
                  andresdeoro16@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary-500" />
                <a href="https://wa.me/573226728281" className="hover:text-secondary-500 transition-colors">
                  +57 322 6728281
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-neutral-400">
          <p>&copy; {currentYear} RXvision. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import { Stethoscope, ArrowRight } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 h-48 w-48 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Main content */}
      <div className="container-custom text-center z-10">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6 flex items-center justify-center gap-4">
            <Stethoscope className="h-12 w-12 text-primary-500" />
            RX<span className="text-primary-500">vision</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Inteligencia Artificial para Diagnóstico y Educación 
            en Radiología de Tórax
          </p>
          
          <button 
            onClick={onEnter}
            className={`btn-primary text-lg px-8 py-4 shadow-lg transition-all duration-1000 delay-500 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Entrar <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Features preview */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 transition-all duration-1000 delay-700 max-w-4xl mx-auto ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[
            {
              id: 'diagnostic',
              title: 'Diagnóstico IA',
              description: 'Análisis automatizado de radiografías de tórax en segundos.',
              delay: 'delay-800',
            },
            {
              id: 'education',
              title: 'Educación Médica',
              description: 'Aprende a interpretar radiografías con nuestros recursos educativos.',
              delay: 'delay-900',
            }
          ].map((feature, index) => (
            <button 
              key={index}
              onClick={() => onEnter()}
              className={`card hover:shadow-lg transition-all duration-500 ${feature.delay} hover:bg-primary-50 hover:scale-105 cursor-pointer`}
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
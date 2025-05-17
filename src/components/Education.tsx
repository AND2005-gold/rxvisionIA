import React, { useState } from 'react';
import { BookOpen, Atom as Anatomy, HeartPulse, GraduationCap, ChevronRight, ChevronDown } from 'lucide-react';

const Education: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const educationalModules = [
    {
      id: 'anatomy',
      title: 'Anatomía Torácica',
      icon: <Anatomy className="h-8 w-8 text-primary-500" />,
      description: 'Aprende sobre la anatomía normal del tórax visible en radiografías.',
      topics: [
        {
          title: 'Estructuras Óseas',
          content: 'Las costillas, clavículas, escápulas y columna vertebral forman el marco óseo visible en una radiografía de tórax. Es importante identificar fracturas, lesiones o anomalías en estas estructuras.'
        },
        {
          title: 'Pulmones y Pleura',
          content: 'Los pulmones aparecen como áreas radiolúcidas (oscuras). La pleura, una membrana delgada que recubre los pulmones, normalmente no es visible a menos que esté engrosada o contenga líquido.'
        },
        {
          title: 'Mediastino',
          content: 'El mediastino es el espacio entre los pulmones que contiene el corazón, grandes vasos, esófago y tráquea. En la radiografía, el mediastino aparece como una densidad central.'
        },
        {
          title: 'Diafragma',
          content: 'El diafragma separa el tórax del abdomen y aparece como una línea curva en la base de los pulmones. Es importante evaluar su contorno y posición.'
        }
      ]
    },
    {
      id: 'projections',
      title: 'Proyecciones Radiológicas',
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
      description: 'Conoce las diferentes proyecciones utilizadas en radiografía torácica.',
      topics: [
        {
          title: 'Proyección PA (Posteroanterior)',
          content: 'Es la proyección estándar donde los rayos X atraviesan desde la parte posterior del paciente hacia la anterior. El paciente está de pie, con el pecho contra el detector.'
        },
        {
          title: 'Proyección Lateral',
          content: 'Complementa la proyección PA y permite visualizar lesiones que pueden estar ocultas por superposición en la vista frontal. El paciente se coloca de lado.'
        },
        {
          title: 'Proyección AP (Anteroposterior)',
          content: 'Los rayos X atraviesan desde la parte anterior hacia la posterior. Se utiliza en pacientes que no pueden ponerse de pie. Produce una imagen con mayor magnificación cardíaca.'
        },
        {
          title: 'Proyección Lordótica',
          content: 'Útil para visualizar los ápices pulmonares. El paciente inclina su cuerpo hacia atrás mientras los rayos X atraviesan horizontalmente.'
        }
      ]
    },
    {
      id: 'pathologies',
      title: 'Patologías Comunes',
      icon: <HeartPulse className="h-8 w-8 text-primary-500" />,
      description: 'Identifica patrones radiológicos de enfermedades torácicas frecuentes.',
      topics: [
        {
          title: 'Neumonía',
          content: 'Aparece como opacidades (áreas blancas) de distribución segmentaria o lobar. Puede haber broncograma aéreo (líneas oscuras dentro del área blanca) que representa bronquios llenos de aire.'
        },
        {
          title: 'Derrame Pleural',
          content: 'Se visualiza como opacidad homogénea que borra el ángulo costofrénico. En proyección lateral, puede verse como una opacidad posterior que se mueve con los cambios de posición.'
        },
        {
          title: 'Neumotórax',
          content: 'Aparece como un área hiperlúcida (más oscura) sin marcas vasculares en la periferia del pulmón. Puede verse una línea fina que representa la pleura visceral separada de la parietal.'
        },
        {
          title: 'Tuberculosis',
          content: 'En fase activa puede verse como opacidades en lóbulos superiores, a veces con cavitaciones. En fase antigua, puede haber fibrosis, retracción y calcificaciones.'
        }
      ]
    },
    {
      id: 'interactive',
      title: 'Casos Interactivos',
      icon: <GraduationCap className="h-8 w-8 text-primary-500" />,
      description: 'Practica con casos reales y pon a prueba tus conocimientos.',
      topics: [
        {
          title: 'Caso 1: Hombre de 45 años con fiebre y tos',
          content: 'Este caso presenta un paciente con consolidación en lóbulo inferior derecho, consistente con neumonía bacteriana. Observe el broncograma aéreo y la ausencia de pérdida de volumen.'
        },
        {
          title: 'Caso 2: Mujer de 30 años con dolor torácico agudo',
          content: 'La radiografía muestra un neumotórax espontáneo en hemitórax izquierdo. Identifique la línea pleural y el colapso parcial del pulmón izquierdo.'
        },
        {
          title: 'Caso 3: Hombre de 60 años con disnea progresiva',
          content: 'El caso demuestra un derrame pleural derecho con opacidad homogénea que borra el ángulo costofrénico y produce una curva de damoiseau característica.'
        },
        {
          title: 'Caso 4: Mujer de 25 años, asintomática en chequeo rutinario',
          content: 'Esta radiografía muestra una silueta cardíaca agrandada sugestiva de cardiomegalia. Observe la relación cardiotorácica mayor a 0.5 y el aumento del diámetro transverso del corazón.'
        }
      ]
    }
  ];

  const toggleModule = (moduleId: string) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
    } else {
      setActiveModule(moduleId);
    }
  };

  return (
    <section className="section pt-28 pb-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-bold text-primary-500 mb-4">Aprende a Leer Radiografías de Tórax</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Explora nuestros módulos educativos para mejorar tus habilidades en la interpretación
            de radiografías torácicas. Desde anatomía básica hasta casos clínicos complejos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Educational modules */}
          <div className="space-y-6">
            {educationalModules.map((module) => (
              <div 
                key={module.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <div 
                  className="flex items-center p-6 cursor-pointer"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    {module.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-neutral-800">
                      {module.title}
                    </h3>
                    <p className="text-neutral-600 mt-1">
                      {module.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    {activeModule === module.id ? (
                      <ChevronDown className="h-6 w-6 text-primary-500" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-neutral-400" />
                    )}
                  </div>
                </div>

                {/* Module content */}
                {activeModule === module.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-neutral-200 pt-4 mt-2">
                      {module.topics.map((topic, index) => (
                        <div 
                          key={index}
                          className="py-4 border-b border-neutral-100 last:border-b-0"
                        >
                          <h4 className="text-lg font-medium text-primary-600 mb-2">
                            {topic.title}
                          </h4>
                          <p className="text-neutral-700">{topic.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6">
              ¿Quieres acceder a más recursos educativos y casos clínicos detallados?
            </p>
            <button className="btn-primary">
              Explorar Recursos Adicionales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
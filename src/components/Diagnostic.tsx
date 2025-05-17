import React, { useState, useRef } from 'react';
import { UploadCloud, Image, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { processImage } from '../utils/imageProcessing';

const Diagnostic: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    diagnosis: string;
    confidence: number;
    findings: string[];
  }>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      
      if (validTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImage(e.target.result as string);
            setResult(null);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor, sube una imagen en formato JPG, PNG o GIF');
      }
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    
    setAnalyzing(true);
    
    // Simulated analysis with delay
    try {
      const analysisResult = await processImage(image);
      setTimeout(() => {
        setResult(analysisResult);
        setAnalyzing(false);
      }, 2500);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setAnalyzing(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const loadExampleImage = () => {
    // Example chest X-ray image from a public medical dataset
    const exampleImageUrl = 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg';
    setImage(exampleImageUrl);
    setResult(null);
  };

  return (
    <section className="section pt-28 pb-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-bold text-primary-500 mb-4">Diagnóstico Automatizado</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Nuestra inteligencia artificial analiza radiografías de tórax para 
            detectar patologías comunes. Sube tu imagen para obtener un análisis 
            preliminar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload section */}
            <div className="space-y-6">
              <div
                className={`border-2 ${
                  isDragging 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-neutral-300 bg-neutral-50'
                } border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  accept="image/jpeg,image/png,image/gif"
                  className="hidden"
                />
                <UploadCloud className="h-16 w-16 mx-auto text-neutral-400 mb-4" />
                <h3 className="text-lg font-medium text-neutral-700 mb-2">
                  Arrastra y suelta tu radiografía aquí
                </h3>
                <p className="text-neutral-500 mb-4">
                  o haz clic para seleccionar un archivo
                </p>
                <p className="text-sm text-neutral-400">
                  Formatos soportados: JPG, PNG, GIF
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={loadExampleImage}
                  className="btn-outline text-sm px-4 py-2"
                >
                  <Image className="h-4 w-4 mr-2" />
                  Cargar imagen de ejemplo
                </button>

                {image && (
                  <button
                    onClick={handleReset}
                    className="btn text-sm px-4 py-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reiniciar
                  </button>
                )}
              </div>
            </div>

            {/* Preview and results section */}
            <div className="space-y-6">
              {/* Image preview */}
              {image ? (
                <div className="relative bg-neutral-100 rounded-xl overflow-hidden aspect-square">
                  <img
                    src={image}
                    alt="Radiografía de tórax"
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <div className="bg-neutral-100 rounded-xl flex items-center justify-center aspect-square">
                  <p className="text-neutral-400">
                    Vista previa de la imagen
                  </p>
                </div>
              )}

              {/* Analyze button */}
              <button
                onClick={handleAnalyze}
                disabled={!image || analyzing}
                className={`btn-primary w-full ${
                  !image || analyzing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {analyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analizando imagen...
                  </>
                ) : (
                  'Analizar Imagen'
                )}
              </button>
            </div>
          </div>

          {/* Results section */}
          {result && (
            <div className="mt-10 animate-fade-in">
              <div className="bg-white border border-neutral-200 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full mr-3 ${
                    result.confidence > 80 
                      ? 'bg-success bg-opacity-20' 
                      : 'bg-warning bg-opacity-20'
                  }`}>
                    {result.confidence > 80 ? (
                      <Check className="h-5 w-5 text-success" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-warning" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">Resultado del Análisis</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">
                      Diagnóstico preliminar:
                    </h4>
                    <p className="text-primary-600 font-semibold">{result.diagnosis}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-medium text-neutral-700 mb-2">
                        Nivel de confianza:
                      </h4>
                      <div className="w-full bg-neutral-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            result.confidence > 80 
                              ? 'bg-success' 
                              : result.confidence > 50 
                                ? 'bg-warning' 
                                : 'bg-danger'
                          }`}
                          style={{ width: `${result.confidence}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">
                        {result.confidence}% de certeza
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">
                      Hallazgos detectados:
                    </h4>
                    <ul className="space-y-2">
                      {result.findings.map((finding, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex-shrink-0 mr-2 flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          <span className="text-neutral-700">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500">
                    <strong>Nota:</strong> Este es un análisis preliminar y no constituye un diagnóstico médico.
                    Consulte siempre con un profesional de la salud para una evaluación completa.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
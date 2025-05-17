// This is a mock service that simulates image processing and analysis
// In a real application, this would connect to a backend AI service

interface AnalysisResult {
  diagnosis: string;
  confidence: number;
  findings: string[];
}

export const processImage = async (imageData: string): Promise<AnalysisResult> => {
  // This would normally send the image to an AI service
  // Instead, we'll return mock data after a short delay
  
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      // Generate random results for demonstration
      const possibleDiagnoses = [
        {
          diagnosis: "Neumonía bacteriana",
          confidence: 87,
          findings: [
            "Consolidación en lóbulo inferior derecho",
            "Broncograma aéreo visible",
            "Sin pérdida significativa de volumen",
            "Senos costofrénicos libres"
          ]
        },
        {
          diagnosis: "Derrame pleural izquierdo",
          confidence: 92,
          findings: [
            "Opacidad homogénea en base izquierda",
            "Borramiento del ángulo costofrénico",
            "Desplazamiento mediastínico contralateral",
            "Sin evidencia de consolidación"
          ]
        },
        {
          diagnosis: "Neumotórax derecho",
          confidence: 78,
          findings: [
            "Hiperclaridad en ápice derecho",
            "Ausencia de trama vascular en zona afectada",
            "Línea pleural visible",
            "Colapso parcial del pulmón"
          ]
        },
        {
          diagnosis: "Normal - Sin hallazgos patológicos",
          confidence: 95,
          findings: [
            "Índice cardiotorácico normal",
            "Campos pulmonares claros",
            "Hilios pulmonares de aspecto normal",
            "Ángulos costofrénicos libres"
          ]
        },
        {
          diagnosis: "Cardiomegalia",
          confidence: 82,
          findings: [
            "Índice cardiotorácico > 0.5",
            "Crecimiento de cavidades izquierdas",
            "Campos pulmonares con patrón vascular normal",
            "Sin evidencia de congestión pulmonar"
          ]
        }
      ];
      
      // Select a random diagnosis from the possibilities
      const randomIndex = Math.floor(Math.random() * possibleDiagnoses.length);
      const result = possibleDiagnoses[randomIndex];
      
      resolve(result);
    }, 2000);
  });
};

// Function to validate image type and size
export const validateImage = (file: File): boolean => {
  const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!validTypes.includes(file.type)) {
    return false;
  }
  
  if (file.size > maxSize) {
    return false;
  }
  
  return true;
};
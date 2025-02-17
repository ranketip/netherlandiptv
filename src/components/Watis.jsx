import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const InstallationSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Selecteer uw plan",
      description: "Selecteer het plan waarin u geïnteresseerd bent"
    },
    {
      number: 2,
      title: "Plaats bestelling",
      description: "Plaats de bestelling via onze beveiligde betaalmethoden"
    },
    {
      number: 3,
      title: "Begin direct",
      description: "U ontvangt per e-mail een complete installatiehandleiding en de applicatie die u nodig hebt om te beginnen met het bekijken van uw favoriete shows!"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ons proces in 3 eenvoudige stappen
          </h2>
          <p className="text-lg text-gray-600">
            Heel eenvoudig aan de slag in drie simpele stappen
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative bg-white p-6 rounded-xl shadow-lg border border-orange-100 transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute -top-4 left-6 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              
              <div className="absolute bottom-4 right-4 text-orange-500">
                <CheckCircle2 size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationSteps;
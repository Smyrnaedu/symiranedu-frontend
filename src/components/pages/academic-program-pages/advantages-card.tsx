import React from 'react';

interface AdvantageCardProps {
  advantage: {
    title: string;
    description: string;
  };
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <h3 className="font-semibold text-blue-800 mb-2">{advantage.title}</h3>
      <p className="text-blue-700">{advantage.description}</p>
    </div>
  );
};

export default AdvantageCard;
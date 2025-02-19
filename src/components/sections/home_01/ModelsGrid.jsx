import React from 'react';
import '../../../styles/ModelsGrid.css';
import { Link } from 'react-router-dom';

const ModelsGrid = () => {
  const models = [
    { name: 'Astra-5Q-TH/', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    { name: 'Astra-5Q-TH', type: 'Text Generation', updated: '1 day ago', stars: '7.7k', likes: '1.27k' },
    { name: 'txt-img/N3T', type: 'Text-to-Image', updated: '22 days ago', stars: '775k', likes: '3.92k' },
    { name: 'Picture/text.text/HKP', type: 'Image-Text-to-Text', updated: '24 hours ago', stars: '144k', likes: '439' },
    { name: 'Mamaloi-4B', type: 'Text Generation', updated: '16 hours ago', stars: '1.89k', likes: '225' },
    { name: 'Adverse-lmt-g54', type: 'Text Generation', updated: '18 days ago', stars: '3.13M', likes: '2.29k' },
    { name: 'Diara-urht-87', type: 'Text Generation', updated: '1 day ago', stars: '1.36k', likes: '122' },
    // Add more models as needed

    // Add more models as needed
  ];

  return (
    <div className="models-grid">
      {models.map((model, index) => (
        <div className="model-item" key={index}>
          <Link to='/products'><div className="model-header">
            <span className="model-name">{model.name}</span>
            <span className="model-type">{model.type}</span>
          </div>
          <div className="model-details">
            <span className="model-updated">Updated {model.updated}</span>
            <span className="model-stats">{model.stars} ⭐ | {model.likes} ❤️</span>
            
          </div></Link>
        </div>
      ))}
    </div>
  );
};

export default ModelsGrid;

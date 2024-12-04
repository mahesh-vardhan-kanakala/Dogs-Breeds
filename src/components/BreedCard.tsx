import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBreedImage } from '../services/dogApi';
import { BreedDetails } from './BreedDetails';
import { breedInfo } from '../data/breedInfo';
import { Info } from 'lucide-react';

interface BreedCardProps {
  breed: string;
  subBreeds: string[];
}

export function BreedCard({ breed, subBreeds }: BreedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { data: imageUrl } = useQuery({
    queryKey: ['breedImage', breed],
    queryFn: () => getBreedImage(breed)
  });

  // Find the breed info by checking different variations of the breed name
  const getBreedInfo = (breedName: string) => {
    // Remove any hyphens or spaces and convert to lowercase
    const normalizedName = breedName.replace(/[-\s]/g, '').toLowerCase();
    
    // Check if the normalized name exists in breedInfo
    if (normalizedName in breedInfo) {
      return breedInfo[normalizedName as keyof typeof breedInfo];
    }

    // Check if the breed name is part of a compound name
    const breedKeys = Object.keys(breedInfo);
    const matchingBreed = breedKeys.find(key => 
      normalizedName.includes(key) || key.includes(normalizedName)
    );

    if (matchingBreed) {
      return breedInfo[matchingBreed as keyof typeof breedInfo];
    }

    // Return generic info if no match is found
    return {
      height: "Varies by breed variation",
      weight: "Varies by breed variation",
      lifespan: "10-13 years (average)",
      temperament: "Varies by breed variation",
      group: "Contact breed club for specific details"
    };
  };

  const details = getBreedInfo(breed);

  return (
    <div 
      className="relative p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${breed} dog`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold capitalize text-gray-800">
            {breed}
          </h3>
          <Info className="w-5 h-5 text-indigo-500" />
        </div>
        {subBreeds.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {subBreeds.map((subBreed) => (
              <span
                key={subBreed}
                className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm capitalize"
              >
                {subBreed}
              </span>
            ))}
          </div>
        )}
      </div>

      <div 
        className={`absolute inset-0 bg-white/95 p-4 rounded-lg transition-all duration-300 flex flex-col
          ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <h3 className="text-lg font-semibold capitalize text-gray-800 mb-4">
          {breed} Details
        </h3>
        <BreedDetails {...details} />
      </div>
    </div>
  );
}
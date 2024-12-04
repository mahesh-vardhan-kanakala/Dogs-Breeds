import React from 'react';
import { Clock, Ruler, Weight, Heart, Users } from 'lucide-react';

interface BreedDetailsProps {
  height: string;
  weight: string;
  lifespan: string;
  temperament: string;
  group: string;
}

export function BreedDetails({ height, weight, lifespan, temperament, group }: BreedDetailsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Ruler className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">Height: {height}</span>
      </div>
      <div className="flex items-center gap-2">
        <Weight className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">Weight: {weight}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">Lifespan: {lifespan}</span>
      </div>
      <div className="flex items-center gap-2">
        <Heart className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">Temperament: {temperament}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-indigo-500" />
        <span className="text-sm">Group: {group}</span>
      </div>
    </div>
  );
}
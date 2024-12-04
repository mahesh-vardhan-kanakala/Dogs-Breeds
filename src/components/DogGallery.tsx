import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRandomDogs } from '../services/dogApi';
import { RefreshCw, Grid } from 'lucide-react';
import { Button } from './ui/Button';

export function DogGallery() {
  const { data: images, refetch, isLoading } = useQuery({
    queryKey: ['dogGallery'],
    queryFn: () => getRandomDogs(9)
  });

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Grid className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800">Gallery of Joy</h2>
        </div>
        <Button
          onClick={() => refetch()}
          disabled={isLoading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Gallery
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images?.map((url, index) => (
          <div
            key={url}
            className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={url}
              alt={`Dog ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
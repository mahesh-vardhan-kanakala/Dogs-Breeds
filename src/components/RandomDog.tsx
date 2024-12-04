import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRandomDog } from '../services/dogApi';
import { RefreshCw, PawPrint } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { Button } from './ui/Button';

export function RandomDog() {
  const { data: imageUrl, refetch, isLoading } = useQuery({
    queryKey: ['randomDog'],
    queryFn: getRandomDog
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PawPrint className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">Born as a Dog</h2>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => refetch()}
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            New Life
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Random dog"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <p className="mt-4 text-gray-600 text-center font-medium">
          This could have been you in another life! 🐾
        </p>
      </CardContent>
    </Card>
  );
}
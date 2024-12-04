import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllBreeds } from '../services/dogApi';
import { List } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { SearchBar } from './SearchBar';
import { BreedCard } from './BreedCard';

export function BreedList() {
  const [search, setSearch] = useState('');
  const { data: breeds } = useQuery({
    queryKey: ['breeds'],
    queryFn: getAllBreeds
  });

  const breedEntries = breeds ? Object.entries(breeds) : [];
  const filteredBreeds = breedEntries.filter(([breed]) => 
    breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <List className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800">Discover Breeds</h2>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar">
          {filteredBreeds.map(([breed, subBreeds]) => (
            <BreedCard
              key={breed}
              breed={breed}
              subBreeds={subBreeds as string[]}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
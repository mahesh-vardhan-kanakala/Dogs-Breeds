import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RandomDog } from './components/RandomDog';
import { BreedList } from './components/BreedList';
import { DogGallery } from './components/DogGallery';
import { Dog } from 'lucide-react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Dog className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">DogExplorer</h1>
                <p className="text-sm text-gray-500">Discover the wonderful world of dogs</p>
              </div>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RandomDog />
            <BreedList />
          </div>
          <DogGallery />
        </main>

        <footer className="mt-16 py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>Made with ❤️ for dog lovers everywhere</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
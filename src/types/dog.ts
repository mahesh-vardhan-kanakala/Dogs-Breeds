export interface DogBreed {
  name: string;
  subBreeds: string[];
  details: {
    height: string;
    weight: string;
    lifespan: string;
    temperament: string;
    group: string;
  };
}

export interface BreedInfo {
  [key: string]: {
    height: string;
    weight: string;
    lifespan: string;
    temperament: string;
    group: string;
  };
}
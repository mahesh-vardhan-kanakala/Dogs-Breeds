const BASE_URL = 'https://dog.ceo/api';

export async function getRandomDog() {
  const response = await fetch(`${BASE_URL}/breeds/image/random`);
  const data = await response.json();
  return data.message;
}

export async function getAllBreeds() {
  const response = await fetch(`${BASE_URL}/breeds/list/all`);
  const data = await response.json();
  return data.message;
}

export async function getRandomDogs(count: number = 9) {
  const response = await fetch(`${BASE_URL}/breeds/image/random/${count}`);
  const data = await response.json();
  return data.message;
}

export async function getBreedImage(breed: string) {
  const response = await fetch(`${BASE_URL}/breed/${breed}/images/random`);
  const data = await response.json();
  return data.message;
}
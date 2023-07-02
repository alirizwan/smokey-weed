import { TRepository } from '../types';
import { LOCAL_STORAGE_KEY } from './appCostants';

function getLocalData () {
  const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return rawData ? JSON.parse(rawData) : {};
}

export function toggleFavorite (repository: TRepository, favorite: boolean) {
  
  const exisitingData = getLocalData();

  if (favorite)
    exisitingData[repository.fullName] = repository;
  else
    delete exisitingData[repository.fullName];

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(exisitingData));
}

export function isFavorite (key: string): boolean {
  const exisitingData = getLocalData();

  return !!exisitingData[key];
}

export function getFavorites (): TRepository[] {
  const exisitingData = getLocalData();

  return Object.keys(exisitingData).map((name: string) => exisitingData[name]);
}

export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
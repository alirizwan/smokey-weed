import { LOCAL_STORAGE_KEY } from './appCostants';

function getLocalData () {
  const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return rawData ? JSON.parse(rawData) : {};
}

export function toggleFavorite (key: string, favorite: boolean) {
  
  const exisitingData = getLocalData();

  if (favorite)
    exisitingData[key] = true;
  else
    delete exisitingData[key];

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(exisitingData));
}

export function isFavorite (key: string): boolean {
  const exisitingData = getLocalData();

  return !!exisitingData[key];
}

export function getFavorite (): string[] {
  const exisitingData = getLocalData();

  return Object.keys(exisitingData);
}

export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
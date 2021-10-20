import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getPeople = async () => {
  const result = await instance.get('people/');
  return result.data;
};

export const getPlanets = async () => {
  const result = await instance.get('planets/');
  return result.data;
};

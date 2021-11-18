
const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/cases';

export const getContinent = async () => {
  // const request = await fetch('https://covid-api.mmediagroup.fr/v1/cases?continent=europe');
  // const countries = await request.json();
  // return countries;
  const continent = 'europe'
  const request = await fetch(`${BASE_URL}?continent=${continent}`);
  const response = await request.json();
  return response;
};

export const getCountry = async (country) => {
  // const request = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
  const response = await fetch(`${BASE_URL}?country=${country}`);
  const response = await request.json();
  return response;
  
};

// export { getContinent, getCountry };

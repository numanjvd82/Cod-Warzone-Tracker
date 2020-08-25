// Getting the response from the api
const getResults = async (userName, userId) => {
  const base = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${userName}%23${userId}/battle`;
  const response = await fetch(base, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com',
      'x-rapidapi-key': 'ee52ea645amsh9d0abf3d92ac804p162999jsn1bff9bccc27d',
    },
  });
  const data = await response.json();
  return data;
};

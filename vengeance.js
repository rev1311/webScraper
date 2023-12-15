import fetch from 'node-fetch';

const apiUrl = 'https://api.example.com/data';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

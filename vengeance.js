const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the JSON data
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });
window.onload = () => {
    console.log('refreshed')
    
    fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    
}

console.log('wtf')
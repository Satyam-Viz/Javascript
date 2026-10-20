const requestURL = 'https://api-github.com/users/Satyam-Viz';

fetch(requestURL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.public_repos);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
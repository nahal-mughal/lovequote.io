document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '${Your API key}';
    const API_HOST = 'love-quote.p.rapidapi.com'; // Define new API_HOST

    // Get references to HTML elements
    const getComplimentButton = document.getElementById('getComplimentButton');
    const complimentDisplay = document.getElementById('complimentDisplay');

    // Function to fetch and display a love quote from the new API

    function fetchQuote() {
        const url = 'https://love-quote.p.rapidapi.com/lovequote';
        console.log(`Requesting URL: ${url}`); // Debugging: Check the request URL

        fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY
            }
        })
        .then(response => {
            console.log(`Response Status: ${response.status}`); // Debugging: Check response status
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data); // Debugging: Check the API response
            // Adjust this based on the actual response structure
            if (data && data.quote) {
                complimentDisplay.textContent = data.quote;
            } else {
                complimentDisplay.textContent = 'No quote available.';
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            complimentDisplay.textContent = 'Error fetching quote. Please try again later.';
        });
    }

    // Event listener for the button
    getComplimentButton.addEventListener('click', fetchQuote);
});


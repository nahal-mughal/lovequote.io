document.addEventListener('DOMContentLoaded', () => {
    // Array of moods
    const moods = [
        'Romantic', 'Attitude', 'Beauty', 'Cool', 'Courage', 'Dating', 'Failure',
        'Faith', 'Family', 'Fear', 'Funny', 'Good', 'Great', 'Happiness',
        'Health', 'Imagination', 'Inspirational', 'Jealousy', 'Learning',
        'Love', 'Patience', 'Peace', 'Poetry', 'Positive', 'Power', 'Relationship',
        'Respect', 'Sad', 'Smile', 'Strength', 'Success', 'Sympathy',
        'Thankful', 'Truth', 'Wisdom', 'Favorite', 'Motivational', 'Life', 'Morning'
    ];

    // Get the select element
    const moodSelect = document.getElementById('moodSelect');

    // Function to create and append options
    function populateMoodOptions() {
        moods.forEach(mood => {
            const option = document.createElement('option');
            option.value = mood.toLowerCase(); // Set value to lowercase
            option.textContent = mood; // Set display text
            moodSelect.appendChild(option); // Append to select
        });
    }

    // Call the function to populate options
    populateMoodOptions();
});

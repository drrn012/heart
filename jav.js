// Get the heart element
const heart = document.querySelector('.heart');

// Event listener for mouseenter (heart touched)
heart.addEventListener('mouseenter', () => {
    heart.classList.remove('dead'); // Remove dead state class
    heart.classList.add('beating'); // Add beating animation class
});

// Event listener for mouseleave (heart not touched)
heart.addEventListener('mouseleave', () => {
    heart.classList.remove('beating'); // Remove beating animation class
    heart.classList.add('dead'); // Add dead state class
});

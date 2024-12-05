//carousel
let currentIndex = 0; // To keep track of the current image index
const carousel = document.querySelector('.carousel');
const totalImages = document.querySelectorAll('.carousel img').length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 1011; // Move by -718.391px per image
    carousel.style.transform = `translateX(${offset}px)`;
}

// Automatically cycle through images every 3 seconds
setInterval(showNextImage, 6000);

// friend button
const friendButton = document.getElementById('friendButton');

friendButton.addEventListener('click', () => {
    if (friendButton.textContent === 'Add Friend') {
        friendButton.textContent = 'Unfriend';
        friendButton.classList.add('unfollow');
    } else {
        friendButton.textContent = 'Add Friend';
        friendButton.classList.remove('unfollow');
    }
});

//thumbs up and down buttons
// JavaScript to toggle button states
document.querySelectorAll('.thumbs-up').forEach(button => {
    button.addEventListener('click', function () {
        // Toggle active state for thumbs-up
        this.classList.toggle('active');

        // Remove active state from corresponding thumbs-down button
        const correspondingDownButton = document.querySelector(`.thumbs-down[data-haiku="${this.dataset.haiku}"]`);
        if (correspondingDownButton) {
            correspondingDownButton.classList.remove('active');
        }
    });
});

document.querySelectorAll('.thumbs-down').forEach(button => {
    button.addEventListener('click', function () {
        // Toggle active state for thumbs-down
        this.classList.toggle('active');

        // Remove active state from corresponding thumbs-up button
        const correspondingUpButton = document.querySelector(`.thumbs-up[data-haiku="${this.dataset.haiku}"]`);
        if (correspondingUpButton) {
            correspondingUpButton.classList.remove('active');
        }
    });
});

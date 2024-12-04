//hamburger
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

//favorites
function toggleFavorite(starElement) {
    const item = starElement.parentElement;
    const img = item.querySelector('img').src;
    const description = item.querySelector('.description').textContent;
    const favoriteSection = document.querySelector('.favorites');

// Toggle star color
    starElement.style.color = starElement.style.color === 'gold' ? '' : 'gold';

// Add or remove from favorites
if (starElement.style.color === 'gold') {
const favoriteItem = document.createElement('div');
favoriteItem.className = 'favorite-item';
favoriteItem.innerHTML = `
    <img src="${img}" alt="Favorite Item">
    <div class="description">${description}</div>
`;
        favoriteSection.appendChild(favoriteItem);
    } else {
        const favorites = favoriteSection.querySelectorAll('.favorite-item');
        favorites.forEach(favorite => {
            if (favorite.querySelector('img').src === img) {
                favoriteSection.removeChild(favorite);
            }
        });
    }
}

//handle hiding/showing sections
//fix positioning
//home button shows all 

// Show the selected section and hide others
function showSection(sectionId) {
const sections = document.querySelectorAll('.category, .favorites');
sections.forEach(section => {
if (section.id === sectionId) {
    section.classList.remove('hidden');  // Show the selected section
    section.scrollIntoView({ behavior: 'auto', block: 'start' }); // Snap to the top of the selected section
} else {
    section.classList.add('hidden');  // Hide other sections
}
});
toggleMenu(); // Hide the menu after selection
}

// Show all sections
function showAllSections() {
const sections = document.querySelectorAll('.category, .favorites');
sections.forEach(section => {
section.classList.remove('hidden'); // Show all sections
});
}

// Toggle menu visibility
function toggleMenu() {
const menu = document.querySelector('.menu');
menu.classList.toggle('show');
}

// Close the menu
function closeMenu() {
const menu = document.querySelector('.menu');
menu.classList.remove('show');
}

// Function to handle menu item clicks
document.querySelectorAll('.menu a').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault(); // Prevent default anchor behavior
const sectionId = this.getAttribute('href').substring(1); // Get section ID from href
if (sectionId === 'home') {
    showAllSections(); // Show all sections if Home is clicked
} else {
    showSection(sectionId); // Show only the selected section
}
closeMenu(); // Close the menu after selection
});
});

// Function to handle section title clicks
document.querySelectorAll('.section-link').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault(); // Prevent default anchor behavior
const sectionId = this.getAttribute('href').substring(1); // Get section ID from href
showSection(sectionId); // Show only the selected section
});
});

// Function to show a specific section
function showSection(sectionId) {
document.querySelectorAll('.category, .favorites').forEach(section => {
if (section.id === sectionId) {
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Ensure the section is at the top
} else {
    section.classList.add('hidden');
}
});
}

// Function to show all sections
function showAllSections() {
document.querySelectorAll('.category, .favorites').forEach(section => {
section.classList.remove('hidden');
});
}
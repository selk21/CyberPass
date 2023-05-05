const about_Button = document.getElementById('showAboutPopup');
const about = document.getElementById('about');
const close_About_Button = document.getElementById('closeAboutPopup');

// Function to open the 'About' popup page
about_Button.addEventListener('click', function() {
  about.classList.remove('hidden');
});

// Function to open the 'About' popup page
close_About_Button.addEventListener('click', function() {
    about.classList.add('hidden');
});
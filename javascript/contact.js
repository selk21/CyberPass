const contact_Button = document.getElementById('showContactPopup');
const contact = document.getElementById('contact');
const close_Contact_Button = document.getElementById('closeContactPopup');

// Function to open the 'Contact' popup page
contact_Button.addEventListener('click', function() {
  contact.classList.remove('hidden');
});

// Function to close the 'Contact' popup page
close_Contact_Button.addEventListener('click', function() {
    contact.classList.add('hidden');
});
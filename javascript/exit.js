// Function to exit the application upon clicking the 'exit' button
document.addEventListener('DOMContentLoaded', function() {
  const exit_Button = document.getElementById('exit-button');
  exit_Button.addEventListener('click', function() {
    window.close();
  });
});

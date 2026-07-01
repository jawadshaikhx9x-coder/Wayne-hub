// Small JS: year, form UX
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e){
  // FormSubmit will handle delivery; we just show a helpful message
  document.getElementById('formStatus').textContent = 'Sending… please check your email for the confirmation from FormSubmit to activate the form.';
});

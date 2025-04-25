// 1. Show alert message
function showAlert(message) {
  alert(message);
}

// 2. Validate email format
function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// 3. Clear all input fields
function clearInputs(formId) {
  const inputs = document.querySelectorAll(`#${formId} input`);
  inputs.forEach(input => input.value = '');
}

// 4. Toggle password visibility
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  input.type = input.type === 'password' ? 'text' : 'password';
}

// 5. Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 6. Get current date string
function getCurrentDate() {
  const date = new Date();
  return date.toLocaleDateString();
}

// 7. Check if all fields are filled
function areAllFieldsFilled(formId) {
  const inputs = document.querySelectorAll(`#${formId} input`);
  return Array.from(inputs).every(input => input.value.trim() !== '');
}

// 8. Save user to localStorage
function saveUserToStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// 9. Retrieve user from localStorage
function getUserFromStorage() {
  return JSON.parse(localStorage.getItem('user'));
}

// 10. Delete user from localStorage
function removeUserFromStorage() {
  localStorage.removeItem('user');
}

  
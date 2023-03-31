const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function() {
  const emailInput = document.getElementById('email-input').value;
  const passwordInput = document.getElementById('password-input').value;
  
  const email = emailInput;
  const password = passwordInput;

  const text = `Email: ${email}\nPassword: ${password}`;

  // Create a new Blob object with the text content and set the MIME type to text/plain
  const blob = new Blob([text], {type: 'text/plain'});

  // Create a new anchor element and set the href attribute to the URL of the Blob object
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);

  // Set the download attribute to the desired filename and click the anchor element to trigger the download
  anchor.download = 'user_inputs.txt';
  anchor.click();
});

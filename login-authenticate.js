class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    // You can also add methods to the User class if needed, like validating the password or checking if the user is active.
  }
//   Next, you'll need to create a sign-up form where users can enter their information. You can use HTML and JavaScript to handle the form submission and create a new User object. Here's an example:
  
//   CODE IS IN login-page.html file 

  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values from the form inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create a new User object
    const newUser = new User(username, email, password);
  
    // Do something with the newUser object, like sending it to a server for further processing
  });
  
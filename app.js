// Import express
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for the root
app.get('/', (req, res) => {
  res.status(200).send('Welcome to my Google Cloud App Engine API!');
});

// Route for getting user data
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];
  res.status(200).json(users);
});

// Route for adding a user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
  };

  // In a real app, you'd save this to a database
  res.status(201).json(newUser);
});

// Set the port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

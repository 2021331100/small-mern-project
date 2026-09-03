const connectDB = require('./src/db/db');
const app = require('./src/app');
const port = 3000;

// Connect to MongoDB
connectDB();



// Sample route
app.get('/', async (req, res) => {
  await res.send('Welcome to the Note Project API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 

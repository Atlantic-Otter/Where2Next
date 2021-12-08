const mongoose = require('mongoose');
const DATABASE = 'Where2Next';

const connect = async function() {
  await mongoose.connect(`mongodb://localhost:27017/${DATABASE}`);
};

connect()
.then(() => {
  console.log(`successfully connected to ${DATABASE}`);
})
.catch((err) => {
  console.log(`Error connecting to ${DATABASE}`);
});


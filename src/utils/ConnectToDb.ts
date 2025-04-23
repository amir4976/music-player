const mongoose = require('mongoose');

const ConnectToDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    // Connection is already established or in progress
    return;
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
    console.log('Connection to DB established 😁😀');
  } catch (error) {
    console.error('Failed to connect to DB:');
    throw new Error('Failed to connect to DB');
  }
};

export default ConnectToDb;

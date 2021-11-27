import { createConnection } from 'typeorm';

async function connectToDatabase() {
    console.log('CONNECTING TO DB....');

    await createConnection();

    console.log('CONNECTED TO DB!');
}

export default connectToDatabase;
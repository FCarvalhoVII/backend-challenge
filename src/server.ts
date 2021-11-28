import app from './app';
import connectToDatabase from './database';

import 'dotenv/config';

const { API_PORT } = process.env;

connectToDatabase().then(() => {
    app.listen(API_PORT, () => console.log(`Server is running in PORT=${API_PORT}...`));
});
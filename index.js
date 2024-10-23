import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';

import transactionsRouter from './routes/transactions.route.js';
import { getTransactionSummary } from './controllers/summary.controller.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
connectDb();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/transactions', transactionsRouter);

app.use('/summary', getTransactionSummary);

app.listen(PORT, () => {
	console.log(`app is listening ay port ${PORT}`);
});

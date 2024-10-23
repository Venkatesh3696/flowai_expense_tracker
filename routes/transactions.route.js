import express from 'express';
import {
	createTransaction,
	deleteTransactionById,
	getTransactionById,
	getTransactions,
	updateTransaction,
} from '../controllers/transactions.controller.js';

const router = express.Router();

router.post('/', createTransaction);

router.get('/:id', getTransactionById);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransactionById);

router.get('/', getTransactions);

export default router;

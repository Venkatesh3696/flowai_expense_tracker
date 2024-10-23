import Transactions from '../models/Transaction.model.js';

export const createTransaction = async (req, res) => {
	try {
		const { type, category, amount, description } = req.body;

		console.log(req.body);
		const transaction = new Transactions({
			type,
			category,
			amount,
			description,
		});

		await transaction.save();
		await res.json(transaction);
	} catch (error) {
		console.log('error fetching transactions:', error);
	}
};

export const getTransactions = async (req, res) => {
	try {
		const transactions = await Transactions.find();
		await res.json(transactions);
	} catch (error) {
		console.log('error fetching transactions:', error);
	}
};

export const getTransactionById = async (req, res) => {
	const { id } = req.params;
	try {
		const transactions = await Transactions.findById(id);
		await res.json(transactions);
	} catch (error) {
		console.log('error fetching transactions:', error);
	}
};

export const updateTransaction = async (req, res) => {
	const { id } = req.params;
	try {
		const { type, category, amount, description } = req.body;

		const updateTransactionBody = {
			type,
			category,
			amount,
			description,
		};

		const transaction = await Transactions.findByIdAndUpdate(
			id,
			updateTransactionBody,
		);

		await res.json(transaction);
	} catch (error) {
		console.log('error fetching transactions:', error);
	}
};

export const deleteTransactionById = async (req, res) => {
	const { id } = req.params;
	try {
		const transactions = await Transactions.findByIdAndDelete(id);
		await res.json({ message: 'transaction deleted' });
	} catch (error) {
		console.log('error deleting transactions:', error);
	}
};

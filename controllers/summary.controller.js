import Transactions from '../models/Transaction.model.js';

export const getTransactionSummary = async (req, res) => {
	try {
		const pipeline = [];
		const filters = {};

		if (filters.startDate && filters.endDate) {
			pipeline.push({
				$match: {
					date: {
						$gte: filters.startDate,
						$lte: filters.endDate,
					},
				},
			});
		}

		if (filters.category) {
			pipeline.push({
				$match: {
					category: filters.category,
				},
			});
		}

		pipeline.push({
			$group: {
				_id: '$type',
				total: { $sum: '$amount' },
			},
		});

		const summary = await Transactions.aggregate(pipeline);
		console.log({ summary });

		const totalIncome =
			summary.find((result) => result._id === 'income')?.total || 0;
		const totalExpense =
			summary.find((result) => result._id === 'expense')?.total || 0;
		const balance = totalIncome - totalExpense;

		await res.json({ totalIncome, totalExpense, balance });
	} catch (error) {
		console.log('error fetching transactions:', error);
	}
};

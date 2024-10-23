import mongoose, { model } from 'mongoose';

const transactionSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: ['income', 'expense'],
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

const Categories = model('Categories', transactionSchema);

export default Categories;

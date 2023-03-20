const { Schema, model } = require("mongoose");

const tourSchema = new Schema(
	{
		tour_name: {
			type: String,
			required: [true, "Name is required"],
		},
		tour_description: {
			type: String,
			required: [true, "Description is required"],
		},
		start_date: {
			type: Date,
			required: [true, "Start date is required"],
		},
		end_date: {
			type: Date,
			required: [true, "End date is required"],
		},
		tour_type: {
			type: String,
			required: [true, "Tour type is required"],
		},
		tour_price: {
			type: Number,
			required: [true, "Price is required"],
		},
		view_count: {
			type: Number,
			default: 0,
		},
		image: {
			type: String,
			data: Buffer,
			contentType: String,
			required: [true, "Image is required"],
		},
	},
	{ timestamps: true }
);

const Tour = model("tour", tourSchema);

module.exports = Tour;

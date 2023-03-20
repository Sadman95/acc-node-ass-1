const { TourModel } = require("../models");

/* GET - by id */
const getTourByIdService = async (tourId) => {
	const tour = await TourModel.findByIdAndUpdate(tourId, {
		$inc: { view_count: 1 },
	});
	return tour;
};

/* GET - tours */
const getToursService = async (filters, queryParams) => {
	const tours = await TourModel.find(filters)
		.skip(queryParams.skip)
		.limit(queryParams.limit)
		.select(queryParams.fields)
		.sort(queryParams.sort);
	return tours;
};

/* CREATE - tour */
const createTourService = async (data) => {
	console.log("Data: ", data);
	const tour = new TourModel(data);
	await tour.save();
	return tour;
};

/* UPDATE - tour */
const updateTourService = async (id, data) => {
	const tour = await TourModel.findByIdAndUpdate(
		{ _id: id },
		{ $set: data },
		{ runValidators: true }
	);
	return tour;
};

/* GET - trending */
const getTrendingTours = async () => {
	const trendings = await TourModel.find({}).sort({ view_count: -1 }).limit(3);
	return trendings;
};

/* GET - cheapest */
const getCheapestTours = async () => {
	const cheapest = await TourModel.find({}).sort("tour-price").limit(3);
	return cheapest;
};

module.exports = {
	getTourByIdService,
	getToursService,
	createTourService,
	updateTourService,
	getTrendingTours,
	getCheapestTours,
};

const { tourController } = require(".");
const { tourService } = require("../services");

/* 
GET TOURS
*/
const getTours = async (req, res, next) => {
	try {
		let filters = { ...req.query };

		const excludeQueries = ["sort", "page", "limit"];
		excludeQueries.forEach((query) => delete filters[query]);

		let filterString = JSON.stringify(filters);

		filters = JSON.parse(filterString);

		const queryParams = {};
		if (req.query.sort) {
			queryParams.sort = req.query.sort.split(",").join(" ");
		}
		if (req.query.fields) {
			queryParams.fields = req.query.fields.split(",").join(" ");
		}

		if (req.query.page) {
			const { page = 1, limit = 10 } = req.query;
			const skip = (page - 1) * Number(limit);

			queryParams.skip = skip;
			queryParams.limit = Number(limit);
		}

		const tours = await tourService.getToursService(filters, queryParams);
		tours &&
			res.status(200).json({
				status: "success",
				data: tours,
			});
	} catch (e) {
		next(e);
	}
};

/* 
GET TOUR BY ID
*/
const getTourById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const tour = await tourService.getTourByIdService(id);
		tour &&
			res.status(200).json({
				status: "Success",
				message: tour,
			});
	} catch (e) {
		next(e);
	}
};

/* 
UPDATE TOUR BY ID
*/
const updateTour = async (req, res, next) => {
	const { id } = req.params;
	try {
		const tour = await tourService.updateTourService(id, req.body);
		tour &&
			res.status(201).json({
				status: "Success",
				message: tour,
			});
	} catch (e) {
		next(e);
	}
};

/* 
CREATE TOUR
*/
const createTour = async (req, res, next) => {
	const {
		tour_name,
		tour_description,
		start_date,
		end_date,
		tour_type,
		tour_price,
	} = req.body;
	const url = req.protocol + "://" + req.get("host");
	try {
		const tour = {
			tour_name,
			tour_description,
			start_date,
			end_date,
			tour_type,
			tour_price,
			image: url + "/uploads" + req.file.filename,
		};
		const newTour = await tourService.createTourService(tour);
		console.log("New: ", newTour);
		newTour &&
			res.status(200).json({
				status: "Success",
				data: newTour,
			});
	} catch (e) {
		next(e);
	}
};

/* 
GET TRENDING TOUR
*/
const getTrendingTours = async (req, res, next) => {
	try {
		const tours = await tourService.getTrendingTours();
		tours &&
			res.status(200).json({
				status: "Success",
				data: tours,
			});
	} catch (e) {
		next(e);
	}
};

/* 
GET CHEAPEST TOURS
*/
const getCheapestTours = async (req, res, next) => {
	try {
		const tours = await tourService.getCheapestTours();
		tours &&
			res.status(200).json({
				status: "Success",
				data: tours,
			});
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getTours,
	getTourById,
	createTour,
	updateTour,
	getCheapestTours,
	getTrendingTours,
};

const upload = require("../middlewares/upload");
const { tourController } = require("../controllers/index");
const router = require("express").Router();

router
	.get("/:id", tourController.getTourById)
	.get("/", tourController.getTours)
	.post("/", upload.single("tour_img"), tourController.createTour)
	.patch("/:id", tourController.updateTour)
	.get("/trending", tourController.getTrendingTours)
	.get("/cheapest", tourController.getCheapestTours);

module.exports = router;

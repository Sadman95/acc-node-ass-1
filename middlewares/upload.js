const multer = require("multer");
const path = require("path");
const fs = require("fs");
var dir = "./Public";

var upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, callback) {
			// console.log("HIt MUlter");
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
			callback(null, "./public/uploads/");
		},
		filename: function (req, file, callback) {
			callback(
				null,
				"/" +
					file.fieldname +
					"-File" +
					Date.now() +
					path.extname(file.originalname)
			);
		},
	}),
});

module.exports = upload;

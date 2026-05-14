const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOnwer, vaildateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require("multer");
const { storage } = require("../cloudConfig.js")
const upload = multer({storage});

router.route("/")
.get( wrapAsync(listingController.index));

// New Route
router.route("/new")
  .get(isLoggedIn, listingController.renderNewForm)
  .post(isLoggedIn, upload.single("listing[image]"), vaildateListing, wrapAsync(listingController.createListing));

// Search Route
router.get("/search", wrapAsync(listingController.searchListings));

// NEW: Category Filter Route
router.get("/category/:category", wrapAsync(listingController.filterByCategory));

router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn, isOnwer, upload.single("listing[image]"), vaildateListing, wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOnwer, wrapAsync(listingController.destroyListing));

// Edit Route
router.get("/:id/edit", isLoggedIn, isOnwer, wrapAsync(listingController.renderEditForm));

module.exports = router;
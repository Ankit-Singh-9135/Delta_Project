const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");


const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


// Index Route 
router.get("/", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("index.ejs", { allListing });
}));


// new  route 
router.get("/new", (req, res) => {
    res.render("new.ejs");
});


// show route 
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","listing you requested for does not exit!")
        res.redirect("/listing");
    }
    res.render("show.ejs", { listing });
}));


// create route 
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
    // let{title, description, image, price, country, location}= req.body;
    // let listing = req.body.listing;

    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listing");

})
);

// edit route 
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing you requested for does not exit!")
        res.redirect("/listing");
    }
    res.render("edit.ejs", { listing });
}));

// update route 
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    // if (!req.body.listing) {
    //     throw new ExpressError(400, "send valid data for listing");
    // }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    //  res.redirect("/listing");
    req.flash("success", " Listing Updated");

    res.redirect(`/listing/${id}`);
}));

// delete route 
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", "Listing Deleted");

    res.redirect("/listing");

}));

module.exports = router;
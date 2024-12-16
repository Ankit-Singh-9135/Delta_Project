const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js")

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },

    description: {
        type: String,
    },

    image: {
        type: String,
        default: "https://www.istockphoto.com/photo/two-adirondack-chairs-and-a-yellow-canoe-gm1363024026-434742855?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fairbnb&utm_medium=affiliate&utm_source=unsplash&utm_term=airbnb%3A%3A%3A",
        set: (v) => v === "" ? "https://www.istockphoto.com/photo/two-adirondack-chairs-and-a-yellow-canoe-gm1363024026-434742855?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fairbnb&utm_medium=affiliate&utm_source=unsplash&utm_term=airbnb%3A%3A%3A" : v,
    },

    price: {
        type: Number
    },

    location: {
        type: String,
    },

    country: {
        type: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
            // require:true,
        },
    ],

});
listingSchema.post("findOneAndDelete",async(Listing)=>{
    if (Listing) {
        await Review.deleteMany({ _id: { $in: Listing.reviews } });
      }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

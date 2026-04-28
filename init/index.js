const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    // Step 1: Delete all existing listings
    await Listing.deleteMany({});
    console.log("All listings deleted");

    // Step 2: Delete all existing users (except the demo one we'll create)
    await User.deleteMany({});
    console.log("All users deleted");

    // Step 3: Create your specific demo account
    const demoUser = new User({
        username: "Khabib Nurmagomedov",           // Change if you want
        email: "khabib@wanderlust.com"
    });

    const registeredUser = await User.register(demoUser, "khabib29"); // Password = demo123

    console.log("✅ Specific demo account created:");
    console.log(`   Username: ${registeredUser.username}`);
    console.log(`   Email: ${registeredUser.email}`);
    console.log(`   ID: ${registeredUser._id}`);

    // Step 4: Add this demo user as owner to all sample listings
    const listingsWithOwner = initData.data.map((listing) => ({
        ...listing,
        owner: registeredUser._id
    }));

    await Listing.insertMany(listingsWithOwner);

    console.log(`✅ ${listingsWithOwner.length} listings initialized with owner: ${registeredUser.username}`);
};

initDB().then(() => {
    mongoose.connection.close();
    console.log("Database connection closed. You can now login with:");
    console.log("Username: Khabib Nurmagomedov");
    console.log("Password: khabib29");
});
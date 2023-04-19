const router = require("express").Router();
const { CategoryGET, CategoryIdGET, ApartmentIdGET, ApartmentGET, ApartmentSearch, MessagePOST } = require("../controller/home.controller");

// Category
router.get("/category/:category_id", CategoryIdGET);
router.get("/category", CategoryGET);

// Apartment
router.get("/apartment/:apartment_id", ApartmentIdGET);
router.get("/apartments/:category_id", ApartmentGET);
router.post("/apartment", ApartmentSearch);

// Message
router.post("/message", MessagePOST);

module.exports = {
    path: "/api",
    router,
}
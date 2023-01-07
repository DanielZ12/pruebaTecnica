const express = require("express");
const router = express.Router();

const {all, create, update, remove } = require("../controllers/reservationController")

router
    .get("/", all)
    .post("/create", create)
    .patch("/update", update)
    .delete("/remove", remove)

module.exports = router    

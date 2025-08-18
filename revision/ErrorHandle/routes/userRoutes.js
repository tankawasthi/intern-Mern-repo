const express = require("express");
const router=express.Router();


router.get("/:id", async (req, res, next) => {
    try {
        const userID = req.params.id;
        if (isNaN(userID)) {
            return res.status(400).json({
                error: "Invalid user ID format. Please provide a numeric ID."
            });
        }
        if (userID == 0) {
            return res.status(404).json({
                error: "User not found."
            });
        }

        if (userID === "throw") {
            throw new Error("Simulated database failure");
        }

        res.json({ id: userID, name: "harry Doe" });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
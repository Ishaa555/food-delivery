import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const foodRouter = express.Router();

// needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image storage engine
const storage = multer.diskStorage({
destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
},
filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
}
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;

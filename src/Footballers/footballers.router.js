import pkg from 'express';
const express = pkg;


import { createFootballer, deleteFootballer, getAllFootballers, getSingleFootballer, updateFootballer } from "./footballers.controller.js";

const router = express.Router();

router.post("/createFootballer",createFootballer);

router.put("/updateFootballer/:id",updateFootballer);

router.delete("/deleteFootballer/:id",deleteFootballer);

router.get("/getAllFootballers",getAllFootballers);

router.get("/getSingleFootballer/:id",getSingleFootballer);

export const footballersRouter = router;
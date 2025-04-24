import express from "express";
import { BookingControllers } from "./booking.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.const";

const router = express.Router();

router.get("/", auth(USER_ROLE.user), BookingControllers.customerBooking);

export const BookingRoutes2 = router;

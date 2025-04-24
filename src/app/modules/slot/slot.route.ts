import express from "express";
import { SlotControllers } from "./slot.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.const";

const router = express.Router();

router.get("/", auth(USER_ROLE.admin), SlotControllers.getAllSlots);

router.get("/availability", SlotControllers.getAvailableSlots);

export const SlotRoutes = router;

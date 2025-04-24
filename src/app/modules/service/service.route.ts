import express from "express";
import { ServiceControllers } from "./service.controller";
import { SlotControllers } from "../slot/slot.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.const";

const router = express.Router();

router.post("/", auth(USER_ROLE.admin), ServiceControllers.createService);

router.get("/", ServiceControllers.getAllServices);

router.get("/:id", ServiceControllers.getSingleService);

router.put("/:id", auth(USER_ROLE.admin), ServiceControllers.updateService);

router.delete("/:id", auth(USER_ROLE.admin), ServiceControllers.deleteService);

router.post("/slots", auth(USER_ROLE.admin), SlotControllers.createSlot);

export const ServiceRoutes = router;

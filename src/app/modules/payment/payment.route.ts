import { Router } from "express";
import { PaymentControllers } from "./payment.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.const";

const router = Router();

router.post(
  "/confirm",
  auth(USER_ROLE.ADMIN, USER_ROLE.USER),
  PaymentControllers.paymentConfirm
);

export const PaymentRoutes = router;

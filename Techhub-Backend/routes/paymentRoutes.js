/*import express from "express";
import {
  checkout,
  getKey,
  multipleVerfication,
  paymentVerfication,
} from "../controllers/paymentControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").post(checkout).get(getKey);
router.route("/paymentVerification").post(paymentVerfication);
router.route("/multipleVerification").post(multipleVerfication);

export default router;
*/
import express from "express";
import {
  checkout,
  getKey,
  multipleVerification, // Corrected spelling
  paymentVerification, // Corrected spelling
} from "../controllers/paymentControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").post(checkout).get(getKey);
router.route("/paymentVerification").post(paymentVerification); // Corrected spelling
router.route("/multipleVerification").post(multipleVerification); // Corrected spelling

export default router;

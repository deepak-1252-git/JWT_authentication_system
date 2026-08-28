import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();

// POST /api/auth/register
authRouter.post("/register",authController.register)

// POST /api/auth/get-me
authRouter.post("/get-me", authController.getMe)

// POST /api/auth/refreshtoken
authRouter.post("/refresh-token", authController.refreshToken)

// POST /api/auth/logout
authRouter.post("/logout",authController.logout)

export default authRouter;
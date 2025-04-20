import express from "express";
import {clerkWebhooks} from "../contollers/userController.js";

const userRouter=  express.Router()

userRouter.post('/webhooks', clerkWebhooks)

export default userRouter
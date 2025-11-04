import express from "express";
import protect from '../middlewares/authMiddleware.js';
import { enhanceJobDescriptionSummary, enhanceProfessionalSummary, uploadResume } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post('/enhance-pro-sum', protect, enhanceProfessionalSummary)
aiRouter.post('/enhance-job-desc', protect, enhanceJobDescriptionSummary)
aiRouter.post('/upload-resume', protect, uploadResume)

export default aiRouter
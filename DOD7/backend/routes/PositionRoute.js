import express from "express";
import { 
    getPositions, 
    getPositionById,
    savePosition,
    updatePosition,
    deletePosition
} from "../controllers/PositionController.js";

const router = express.Router();

router.get('/position', getPositions);
router.get('/position/:id', getPositionById);
router.post('/position/add', savePosition);
router.patch('/position/:id', updatePosition);
router.delete('/position/:id', deletePosition);

export default router;
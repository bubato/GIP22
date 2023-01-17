import express from "express";
import { 
    getDocuments, 
    getDocumentById,
    saveDocument,
    updateDocument,
    deleteDocument
} from "../controllers/DocumentController.js";

const router = express.Router();

router.get('/document', getDocuments);
router.get('/document/:id', getDocumentById);
router.post('/document', saveDocument);
router.patch('/document/:id', updateDocument);
router.delete('/document/:id', deleteDocument);

export default router;
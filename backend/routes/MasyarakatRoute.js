import express from "express";
import {
    getMasyarakat,
    getMasyarakatById,
    postMasyarakat,
    updateMasyarakat,
    deleteMasyarakat,
} from "../controllers/MasyarakatController.js";

const router = express.Router();

router.get('/Masyarakat', getMasyarakat);
router.get('/Masyarakat/:id', getMasyarakatById);
router.post('/Masyarakat', postMasyarakat);
router.patch('/Masyarakat/:id', updateMasyarakat);
router.delete('/Masyarakat/:id', deleteMasyarakat);

export default router;
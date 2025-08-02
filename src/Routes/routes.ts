import { Router } from "express";
import { createRamal, deleteRamal, getRamaisPorSetor } from "../Controllers/controller";


const router = Router();


router.post("/cadastro", createRamal);

router.get("/ramais", getRamaisPorSetor);

router.delete ("/ramais/:id", deleteRamal);



export default router
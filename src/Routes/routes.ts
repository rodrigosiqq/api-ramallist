import { Router } from "express";
import { createRamal, deleteRamal, getRamaisPorSetor, updateRamal } from "../Controllers/controller";


const router = Router();


router.post("/cadastro", createRamal);

router.get("/ramais", getRamaisPorSetor);

router.delete ("/ramais/:id", deleteRamal);

router.put("/update/:id", updateRamal);



export default router
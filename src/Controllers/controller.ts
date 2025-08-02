// controllers/controller.ts

import { criarRamal, buscarRamaisPorSetor, deleteById, updateById } from "../Services/services";
import { Response, Request } from "express";

export async function createRamal(req: Request, res: Response) {
  try {
    const { setores, ramais } = req.body;
    const novoRamal = await criarRamal(setores, ramais);
    res.status(201).json(novoRamal);
  } catch (error) {
    res.status(500).json({ error: "erro ao cadastrar ramal" });
  }
}

export async function getRamaisPorSetor(req: Request, res: Response) {
  try {
    const { setores } = req.query; // Obtém o parâmetro 'setores' da query string
    const ramais = await buscarRamaisPorSetor(setores as string); // Chama a função do service
    res.status(200).json(ramais); // Retorna os ramais encontrados
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ramais por setor" });
  }
}

export async function deleteRamal(req:Request, res:Response){
    try{
        const {id} = req.params;
        const ramalDeletado = await deleteById(id);
        if(ramalDeletado === 0){
            return res.status(404).json({error: "Ramal não encontrado"});
        }
        res.status(200).json({message: "Ramal deletado com sucesso"});

    }catch(error){
        res.status(500).json({error:"Erro ao deletar ramal"});
    }
}

export async function updateRamal(req:Request, res:Response){
    try{
        const{id} = req.params;
        const {setores, ramais}  = req.body
        const atualizarRamais = await updateById(id, {setores, ramais});

        if(atualizarRamais ===0){
            return res.status(404).json({error: "ramal não encontrado"});
        }
        const ramalAtualizado = await buscarRamaisPorSetor(undefined);
        res.status(200).json({message:"Ramal atualizado com sucesso"});

    }catch(error){
        res.status(500).json({error:"erro ao atualizar ramal"});
    }
}
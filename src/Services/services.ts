import { where } from "sequelize";
import RalmalList from "../Models/models";

export async function criarRamal(setores: string, ramais: number) {
  return await RalmalList.create({ setores, ramais });
}

export async function buscarRamaisPorSetor(setores?: string) {
  return await RalmalList.findAll({
    where: setores ? { setores } : undefined,
  });
}

export async function deleteById(id:string){
    const result = await RalmalList.destroy({
        where:{id:id},
    });
    return result;
}

export async function updateById(id:number| string, novosDados:{setores?: string; ramais?:number} ){
    const [update] = await RalmalList.update(updateById,{
        where:{id:id},
    });
    return update;
}
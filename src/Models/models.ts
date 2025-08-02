import { DataTypes, Model } from "sequelize";
import sequelize from "./connect";


class RalmalList extends Model{
    public id!: number;
    public setores!: string;
    public ramais!: number;
}


RalmalList.init(
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    setores:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ramais:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: "RamalList",
    tableName: "ramallist",
    timestamps: false,
}
);

export default RalmalList;
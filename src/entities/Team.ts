import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"team"})
export class Team{
    static find(arg0: { where: { name: import("typeorm").FindOperator<string>; }; order: { name: string; }; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:false, unique:true, length:30})
    name: string;
}
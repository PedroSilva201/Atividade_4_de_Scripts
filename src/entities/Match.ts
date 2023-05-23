import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./Team";

@Entity({name: "matches"})
    export class Match{
        @PrimaryGeneratedColumn()
        id: number;

        @Column({nullable: false, type: 'date', default: () =>  "CURRENT_TIMESTAMP"})
        date: Date;

        @ManyToOne((type) => Team, {onDelete: 'CASCADE'})

        @JoinColumn({
            name: "idhost",
            referencedColumnName: "id",
            foreignKeyConstraintName: "fk_id_host"
        })
        host: Team;

        @ManyToOne((type) => Team, {onDelete: "CASCADE"})
        @JoinColumn({
            name:"idvisitor",
            referencedColumnName: "id",
            foreignKeyConstraintName: "fk_visitor_id"
        })
        visitor: Team;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class FormEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    username: string;
}
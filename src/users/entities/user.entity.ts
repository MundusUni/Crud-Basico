import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { UsersModule } from "../users.module";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;
}
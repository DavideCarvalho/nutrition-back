import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('pacient')
export class Patient {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100, name: 'nome_paciente'})
  name: string;

  @Column('text')
  sex: string;

  @Column({name: 'dia_nascimento'})
  birthdayDay: number;

  @Column({name: 'mes_nascimento'})
  birthdayMonth: number;

  @Column({name: 'ano_nascimento'})
  birthdayYear: number;

}

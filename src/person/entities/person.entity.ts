import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

const { nanoid } = require('nanoid');

@Entity()
export class Person {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @Column()
  isActive: boolean = true;

  @BeforeInsert()
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly repository: Repository<Person>,
  ) {}

  create(dto: CreatePersonDto) {
    const person = this.repository.create(dto);
    return this.repository.save(person);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdatePersonDto) {
    const person = await this.repository.findOneBy({ id });
    if (!person) return null;
    this.repository.merge(person, dto);
    return this.repository.save(person);
  }

  async remove(id: string) {
    const person = await this.repository.findOneBy({ id });
    if (!person) return null;
    return this.repository.remove(person);
  }
}

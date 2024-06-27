import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(3, 30, { message: 'Nome precisa ter entre 3 e 30 caracteres' })
  name: string;

  @IsString()
  cpf: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfBirth: string;

  @IsBoolean()
  isActive: boolean = true;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipanteDto } from './create-participante.dto';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class UpdateParticipanteDto extends PartialType(CreateParticipanteDto) {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  data_nascimento: number;

  @IsNotEmpty()
  @IsString()
  staff: string;
}
import { IsNotEmpty, IsInt, IsString } from 'class-validator';
export class CreateParticipanteDto {
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
import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmeDto } from './create-filme.dto';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class UpdateFilmeDto extends PartialType(CreateFilmeDto) {
  id: number;
  
  @IsNotEmpty()
  @IsString()
  nome: string;
   
  @IsNotEmpty()
  @IsInt()
  data_lancamento: number;
  
  @IsNotEmpty()
  @IsInt()
  tempo_duracao: number;
}
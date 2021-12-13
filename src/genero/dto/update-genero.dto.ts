import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneroDto } from './create-genero.dto';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {
   id: number;

   @IsNotEmpty()
   @IsString()
   nome: string;
}
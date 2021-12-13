import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateGeneroDto {

id: number;

@IsNotEmpty()
@IsString()
nome: string;
}
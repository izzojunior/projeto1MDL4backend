import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateFilmeDto {
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

@IsNotEmpty()
@IsInt()
participantesid: number;

@IsNotEmpty()
@IsInt()
generoid: number;
}
import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { Participantes } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  create(createParticipantesDto: CreateParticipanteDto) {
    lista.push(createParticipantesDto);
    return `Add com sucesso Participantes: ${createParticipantesDto.nome}`;
  }

  async createPrisma(createParticipantesDto: CreateParticipanteDto): Promise<Participantes> {
    return await this.prisma.participantes.create({
      data: { ...createParticipantesDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Participantes[]> {
    return await this.prisma.participantes.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Participantes> {
    return await this.prisma.participantes.findUnique({ where: {id}});
  }

  update(id: number, updateParticipantesDto: UpdateParticipanteDto) {
    return `This action updates a #${id} participantes`;
  }

  async updatePrisma(id: number, updateParticipantesDto: UpdateParticipanteDto): Promise<Participantes> {
    return await this.prisma.participantes.update({
      data:{...updateParticipantesDto},
      where:{id}
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.participantes.delete({ where: {id}});
  }
}
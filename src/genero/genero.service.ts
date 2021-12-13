import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  create(createGeneroDto: CreateGeneroDto) {
    lista.push(createGeneroDto);
    return `Add com sucesso filme: ${createGeneroDto.nome}`;
  }

  async createPrisma(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.create({
      data: { ...createGeneroDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: {id}});
  }
  
  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  async updatePrisma(id: number, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.update({
      data:{...updateGeneroDto},
      where:{id}
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.genero.delete({ where: {id}});
  }
}

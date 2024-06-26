import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Blackhole } from '../entities/blackhole.entity';

import { CreateBlackholeDto } from '../dto/create-blackhole.dto';

@Injectable()
export class BlackholesService {
  constructor(
    @InjectRepository(Blackhole)
    protected blackholesRepository: Repository<Blackhole>,
  ) {}

  findAll(): Promise<Blackhole[]> {
    return this.blackholesRepository.find();
  }

  findOne(id: number): Promise<Blackhole> {
    return this.blackholesRepository.findOneBy({ id });
  }

  create(createBlackhole: CreateBlackholeDto): Promise<Blackhole> {
    const blackhole: Blackhole =
      this.blackholesRepository.create(createBlackhole);
    return this.blackholesRepository.save(blackhole);
  }

  async update(id: number, blackhole: Blackhole): Promise<Blackhole> {
    await this.blackholesRepository.update(id, blackhole);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.blackholesRepository.delete(id);
  }

  async saveImageFilename(id: number, filename: string): Promise<Blackhole> {
    const blackhole: Blackhole = await this.findOne(id);
    if (!blackhole) {
      throw new Error('Blackhole not found');
    }

    blackhole.imageFilename = filename;
    return this.blackholesRepository.save(blackhole);
  }
}

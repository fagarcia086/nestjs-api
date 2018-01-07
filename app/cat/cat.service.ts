import { Component } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDto } from './create-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class CatService {

    constructor(
        @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
    ) { }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async create(createCatDto: CreateCatDto) {
        const cat = this.catRepository.create(createCatDto);
        await this.catRepository.save(cat);
        return { data: cat.id, message: 'New cat created successfully.' };
    }
}

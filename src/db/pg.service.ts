import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from '@west10media/db';

@Injectable()
export class PgService {
  constructor(
    @InjectRepository(Example)
    private userRepository: Repository<Example>,
  ) {}

  // Example method to find all users
  async findAllExamples(): Promise<Example[]> {
    return this.userRepository.find();
  }

  // Example method to create a new user
  async createExample(userDetails: Partial<Example>): Promise<Example> {
    const newUser = this.userRepository.create(userDetails);
    return this.userRepository.save(newUser);
  }

  async findExampleById(id: string): Promise<Example> {
    return this.userRepository.findOneBy({ id: +id });
  }

  // Add more methods as needed...
}
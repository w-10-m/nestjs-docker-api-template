import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PgService } from './pg.service';
import { Example } from '@west10media/db';

@Controller('test')
export class PgController {
  constructor(private readonly pgService: PgService) {}

  @Get()
  async findAllExamples(): Promise<Example[]> {
    return this.pgService.findAllExamples();
  }

  @Post()
  async createExample(@Body() testDetails: Partial<Example>): Promise<Example> {
    return this.pgService.createExample(testDetails);
  }

  // Example of a route to get a single test by ID (assuming Example entity has an id)
  @Get(':id')
  async findExampleById(@Param('id') id: string): Promise<Example> {
    return this.pgService.findExampleById(id);
  }
}
import { Controller, Get } from '@nestjs/common';

@Controller('base')
export class BasicsController {
  @Get()
  findAll(): string {
    return 'This action is the basic setup';
  }
}
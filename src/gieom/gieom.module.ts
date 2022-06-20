import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GieomController } from './gieom.controller';
import { GieomService } from './gieom.service';

@Module({
  imports: [HttpModule],
  controllers: [GieomController],
  providers: [GieomService],
})
export class GieomModule {}

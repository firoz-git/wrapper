import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GieomModule } from './gieom/gieom.module';

@Module({
  imports: [GieomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

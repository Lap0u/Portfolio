import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BasicsModule } from './basics/basics.module';
import { BasicsController } from './basics/basics.controller';

@Module({
  imports: [AuthModule, UserModule, BasicsModule],
  controllers: [AppController, BasicsController],
  providers: [AppService],
})
export class AppModule {}


import { join } from 'path';

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public')
      }) 
],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

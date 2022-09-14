import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';
import { MessageRepository } from './model/Repository/repository';
import { MessagesService } from './service/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessageRepository, MessagesService]
})
export class MessagesModule {}

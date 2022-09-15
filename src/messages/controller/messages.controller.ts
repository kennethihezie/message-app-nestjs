import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageDto } from '../model/dto/message.dto';
import { Message } from '../model/message';
import { MessagesService } from '../service/messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService){}

    @Get()
    getMessages(){
       return this.messageService.getMessages()
    }

    @Post()
    createMessage(@Body() message: MessageDto) {
      return this.messageService.createMessage(message)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) { 
       return this.messageService.getMessage(id)
    }
}

//All endpoints is working.

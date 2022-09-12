import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageDto } from '../model/dto/message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    getMessages(){
       
    }

    @Post()
    createMessage(@Body() message: MessageDto){
      console.log(message);
    }

    @Get('/:id')
    getMessage(@Param() id: string){
       console.log(id);
    }
}

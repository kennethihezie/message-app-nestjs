import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageDto } from '../model/dto/message.dto';
import { Message } from '../model/message';

@Injectable()
export class MessagesService {
    private allMessages: Message[] = []

    createMessage(messageDto: MessageDto): Message {
        const { message, messageUrl } = messageDto
        const timeStamp = new Date()
        const messageOut = {
            id: "1",
            message,
            messageUrl,
            timeStamp
        }
        //hardcoded id
        this.allMessages.push(messageOut)
        return messageOut
    }

    getMessages(): Message[] {
        return this.allMessages;
    }


    getMessage(id: string): Message {
        const data = this.allMessages.find(message => id === message.id)
        if(!data){
            //using default msg
            //throw new NotFoundException()
   
            //custom msg
            throw new NotFoundException(`Task with ID "${id}" not found`)
         }
       return data
    }

}

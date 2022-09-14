import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageDto } from '../model/dto/message.dto';
import { Message } from '../model/message';
import { MessageRepository } from '../model/Repository/repository';

@Injectable()
export class MessagesService {
    constructor(private repository: MessageRepository){}
    
    createMessage(messageDto: MessageDto): Message {
        const { message, messageUrl } = messageDto
        const timeStamp = new Date()
        const id = Math.floor(Math.random() * 999).toString()

        const createdMessage = {
            id: id,
            message,
            messageUrl,
            timeStamp
        }
        this.repository.createMessage(createdMessage)
        return createdMessage
    }

    getMessages() {
        return this.repository.getMessages();
    }


    async getMessage(id: string) {
        const data = await this.repository.getMessage(id)        
        if(!data){
            //using default msg
            //throw new NotFoundException()
   
            //custom msg
            throw new NotFoundException(`Task with ID "${id}" not found`)
         }
       return data
    }

}

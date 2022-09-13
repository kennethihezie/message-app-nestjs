import { MessageDto } from "../dto/message.dto";
import { Message } from "../message";
import { readFile, writeFile } from "fs";
import path from "path";

export class MessageRepository {

   async getMessage(id: string): Message {
     const file = await readFile(path.join(__dirname, 'src/MessageData/messages.json'), 'utf8', (content) => {
        JSON.parse(content)
     })
     const messages = JSON.parse(file)
     return messages[id]
   }

   async getMessages() {
    
   }

   async createMessage(messageDto: MessageDto): Message{

   }
}
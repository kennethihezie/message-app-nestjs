import { MessageDto } from "../dto/message.dto";
import { Message } from "../message";
import { readFile, readFileSync, writeFile } from "fs";
import path from "path";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository {

   async getMessage(id: string) {
      const contents = await readFileSync('messages.json', 'utf8')
      const messages = JSON.parse(contents)
      return messages[id]
   }

   async getMessages() {
      const contents = await readFileSync('messages.json', 'utf8')      
      const messages = JSON.parse(contents)
      return messages
   }

   async createMessage(message: Message){
      const contents = await readFileSync('messages.json', 'utf8')
      const messages = JSON.parse(contents)
      messages[message.id] = { message }
      await writeFile('messages.json', JSON.stringify(messages), ()=>{})
   }
}
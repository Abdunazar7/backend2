import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { BooksMicroServiceController } from './books-microservice.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Book.name,
      schema: BookSchema,
    }])
  ],
  controllers: [BooksController, BooksMicroServiceController],
  providers: [BooksService],
})
export class BooksModule {}

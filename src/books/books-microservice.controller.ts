import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('books')
export class BooksMicroServiceController {
  constructor(private readonly booksService: BooksService) {}

  @EventPattern("book_created")
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  // @Get()
  // findAll() {
  //   return this.booksService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  @EventPattern("book_updated")
  update(@Payload('id') id: string, @Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @EventPattern("book_deleted")
  remove(id: string) {
    return this.booksService.remove(+id);
  }
}

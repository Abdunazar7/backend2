import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./product/schemas/product.schema";
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017/micro`),
    ProductModule,
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

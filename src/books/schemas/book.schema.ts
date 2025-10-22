import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  pages_count: number;

  @Prop()
  author_id: number;

  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);

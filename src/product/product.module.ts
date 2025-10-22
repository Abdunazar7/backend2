import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductMicroServiceController } from './product-microservice.controller';

@Module({
  imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController, ProductMicroServiceController],
  providers: [ProductService],
})
export class ProductModule {}

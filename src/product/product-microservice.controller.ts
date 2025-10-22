import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductMicroServiceController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern("product_created")
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  // @Get()
  // findAll() {
  //   return this.productService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

  @EventPattern("product_updated")
  update(
    @Payload("id") id: string,
    @Payload() updateProductDto: UpdateProductDto
  ) {
    return this.productService.update(+id, updateProductDto);
  }

  @EventPattern("product_deleted")
  remove(id: string) {
    return this.productService.remove(+id);
  }
}

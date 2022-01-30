import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: number, @Param('id') id: number) {
    return `Category ${id}, and product ${productId}`;
  }
}

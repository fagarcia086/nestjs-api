import { Controller, Get, Req, Body, HttpStatus, Post, UseGuards, UseInterceptors, UsePipes, Param, ParseIntPipe, UseFilters, Put, HttpException } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import { TransformInterceptor } from '../common/transform.interceptor';
import { ValidationPipe } from '../common/validation.pipe';
import { ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../common/http-exception.filter';
import { User } from '../common/user.decorator'; // eslint-disable-line import/max-dependencies

@Controller('/cat')
@UseGuards(RolesGuard)
// @UseGuards(CatGuard)
@UseInterceptors(TransformInterceptor)
@UsePipes(new ValidationPipe())
@UseFilters(new HttpExceptionFilter())
export class CatController {

    constructor(
        private readonly catService: CatService,
    ) { }

    @Get('/browse')
    async cats() {
        return this.catService.findAll();
    }

    @Get('/get/:id')
    async cat( @Param('id', new ParseIntPipe()) id) {
        return { id };
    }

    @Post('/')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    async createCat( @Req() req: Request, @Body() body: CreateCatDto) {
        return this.catService.create(body);
    }

    @Get('/admin')
    @Roles('admin')
    async admin( @Req() req: Request) {
        return 'ok';
    }

    @Get('/unknown')
    async unknown() {
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    @Put('/:id')
    async update(@Param('id') id, @User() user) {
        const cat = await this.catService.findOneById(id);
        // (global as any).checkPermission(user, 'cat.update', cat);
    }
}

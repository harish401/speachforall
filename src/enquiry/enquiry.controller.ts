// import { Controller } from '@nestjs/common';
// import {  Get, Post, Body, Param, Put, Delete,UsePipes, ValidationPipe } from '@nestjs/common';
// import { EnquiryService } from './enquiry.service';
// import { Enquiry } from './models/enquiry.entity';

// @Controller('enquiry')
// export class EnquiryController {
//     constructor(private readonly EnquiryService: EnquiryService) {}

//     @Post()
//     @UsePipes(new ValidationPipe({ transform: true }))
//     async createEnquiry(@Body() payload:data): Promise<Enquiry> {
//         return await this.EnquiryService.createEnquiry(data);
//     }
    
//     @Get()
//     async getEnquiry(): Promise<Enquiry[]>  {
//         return this.EnquiryService.getEnquiry();
//     }

   
// }
import { Controller, Post,Get, Body,Param } from '@nestjs/common';
import { EnquiryService } from './enquiry.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { Enquiry } from './schemas/enquiry.schema';

@Controller('enquiry')
export class EnquiryController {
constructor(private readonly enquiryService: EnquiryService) {}

@Post('submit')
async create(@Body() createEnquiryDto: CreateEnquiryDto) {
return await this.enquiryService.create(createEnquiryDto);
}
@Get('detail/:enquiry_id')
async getEnquiryId(@Param('enquiry_id') id: string): Promise<Enquiry>  {
    return this.enquiryService.getEnquiryId(id);
}

@Get()
async getEnquiry() {
return await this.enquiryService.getEnquiry();
}
@Get('list')
async findall() {
return await this.enquiryService.findAll();
}
}

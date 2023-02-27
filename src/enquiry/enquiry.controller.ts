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
import { Controller, Post,Get, Body,Param,InternalServerErrorException } from '@nestjs/common';
import { EnquiryService } from './enquiry.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { Enquiry } from './schemas/enquiry.schema';

@Controller('enquiry')
export class EnquiryController {
constructor(private readonly enquiryService: EnquiryService) {}

@Post('submit')
async create(@Body() createEnquiryDto: CreateEnquiryDto) {
    const { emailID, phoneNumber } = createEnquiryDto;
    const existingEnquiry = await this.enquiryService.findByEmailOrPhone(emailID, phoneNumber);
    
    if (existingEnquiry) {
    return { message: "Enquiry already exists with this email or phone number" };
    }
    
    try {
    const result = await this.enquiryService.create(createEnquiryDto);
    return { message: "Enquiry Successfully Submitted", payload: result };
    } catch (error) {
    throw new InternalServerErrorException(error.message);
    }
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
@Post(':id/change_status')
  async changeStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ): Promise<Enquiry> {
    return this.enquiryService.changeStatus(id, status);
  }
}

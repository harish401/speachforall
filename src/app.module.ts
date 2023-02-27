import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnquiryController} from './enquiry/enquiry.controller'
import { EnquiryService } from './enquiry/enquiry.service';
import { Enquiry, EnquirySchema } from './enquiry/schemas/enquiry.schema';

@Module({
imports: [
MongooseModule.forRoot('mongodb://localhost/enquiry'),
MongooseModule.forFeature([{ name: Enquiry.name, schema: EnquirySchema }]),
],
controllers: [EnquiryController],
providers: [EnquiryService],
})
export class AppModule {}
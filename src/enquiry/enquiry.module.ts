import { Module } from '@nestjs/common';
import { EnquiryController } from './enquiry.controller';
import { EnquiryService } from './enquiry.service';
import { Enquiry,EnquirySchema } from './schemas/enquiry.schema';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'enquiry', schema: EnquirySchema }])],
  controllers: [EnquiryController],
  providers: [EnquiryService],
  exports:[EnquiryService]
})
export class EnquiryModule {}

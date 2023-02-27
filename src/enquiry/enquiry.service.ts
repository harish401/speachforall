// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';

// import { Model } from 'mongoose';
// import { Enquiry } from './models/enquiry.entity';

// @Injectable()
// // export class EnquiryService {

// //     constructor(@InjectModel('Enquiry') private EnquiryModel: Model<Enquiry>) {}

// //     async getEnquiry(): Promise<Enquiry[]> {
// //         return await this.EnquiryModel.find().exec();
// //     }
// // }
// export class EnquiryService {

//     constructor(@InjectModel('enquiry') private enquiryModel: Model<Enquiry>) {}

//     async getEnquiry(): Promise<Enquiry[]> {
//         return await this.enquiryModel.find().exec();
//     }
   
//     async createEnquiry(data): Promise<Enquiry> {
//         const entity = new this.enquiryModel(data);
//         return await entity.save();

// }
// }
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enquiry,EnquiryDocument } from './schemas/enquiry.schema';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';

@Injectable()
export class EnquiryService {
constructor(
@InjectModel(Enquiry.name) private readonly enquiryModel: Model<EnquiryDocument>,
) {}

async getEnquiry(): Promise<Enquiry[]> {
            return await this.enquiryModel.find().exec();
        }
        async getEnquiryId(id: string): Promise<Enquiry> {
            return await this.enquiryModel.findById(id).exec();
        }
async create(createEnquiryDto: CreateEnquiryDto): Promise<Enquiry> {
const enquiry = new this.enquiryModel(createEnquiryDto);
return await enquiry.save();
}
async findAll(): Promise<Enquiry[]> {
    return this.enquiryModel.find().exec();
  }

}
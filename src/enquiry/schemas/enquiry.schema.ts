import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';
import { Expose } from 'class-transformer';
export type EnquiryDocument = Enquiry & Document;

@Schema()
export class Enquiry {
@Prop()
id?: number;
@Prop() 
@IsString()
@IsNotEmpty()
firstName: string;

@Prop()
@IsString()
@IsNotEmpty()
lastName: string;

@Prop()
@IsNotEmpty()
clientAgeGroupDOB: string;

@Prop()
@IsString()
@IsNotEmpty()
gender: string;

@Prop()
@IsEmail()
@IsNotEmpty()
emailID: string;

@Prop()
@IsPhoneNumber()
@IsNotEmpty()
phoneNumber: string;

@Prop()
@IsString()
@IsNotEmpty()
addressWithPIN: string;

@Prop()
@IsString()
@IsNotEmpty()
relationWithPatient: string;

@Prop()
@IsString()
@IsNotEmpty()
initialMeetingAvailability: string;

@Prop()
@IsString()
@IsNotEmpty()
requestDetails: string;

@Prop()
@IsNotEmpty()
checkboxWithTandC: boolean;
// messages: string[];
// createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
@Prop()
  messages: string[];
  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export const EnquirySchema = SchemaFactory.createForClass(Enquiry);
/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { isEmail, IsEmail, IsNotEmpty } from "class-validator";
import { Expose } from 'class-transformer';
@Schema({ collection: 'enquiry-collection' })
export class Enquiry {
  @Prop() id?: number;
  @Prop({ required: true }) firstName: string;
  @Prop({ required: true }) lastName: string;
 
 @Prop({required: true})clientAgeGroupDOB: Date;
 @Prop({required: true})gender: string;
 @Prop({unique: true, required: true }) 
 @IsEmail()
 emailID: string;
 @Prop({unique: true,required: true,
})
 
 phoneNumber: Number;

 @Prop({required: true})addressWithPIN: string;
 @Prop({required: true})relationWithPatient: string;
 @Prop({required: true})initialMeetingAvailability: string;
 @Prop({required: true})requestDetails: string ;
 @Prop({required: true})checkboxWithTandC: Boolean;
 @Expose()
 createdAt: Date;

 @Expose()
 updatedAt: Date;
 
}
export const EnquiryEntitySchema = SchemaFactory.createForClass(Enquiry);


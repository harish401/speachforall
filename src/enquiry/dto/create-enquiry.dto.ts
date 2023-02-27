import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsPhoneNumber,
    IsBoolean,
    } from 'class-validator';
    import { Expose } from 'class-transformer';
    export class CreateEnquiryDto {
        
    @IsString()
    @IsNotEmpty()
    firstName: string;
    
    @IsString()
    @IsNotEmpty()
    lastName: string;
    
    @IsNotEmpty()
    clientAgeGroupDOB: string;
    
    @IsString()
    @IsNotEmpty()
    gender: string;
    
    @IsEmail()
    @IsNotEmpty()
    emailID: string;
    
    @IsPhoneNumber()
    @IsNotEmpty()
    phoneNumber: string;
    
    @IsString()
    @IsNotEmpty()
    addressWithPIN: string;
    
    @IsString()
    @IsNotEmpty()
    relationWithPatient: string;
    
    @IsString()
    @IsNotEmpty()
    initialMeetingAvailability: string;
    
    @IsString()
    @IsNotEmpty()
    requestDetails: string;
    
    @IsBoolean()
    @IsNotEmpty()
    checkboxWithTandC: boolean;
    message: string[];
    @Expose()
    createdAt: Date;
  
    @Expose()
    updatedAt: Date;
    

} 
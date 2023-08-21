import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IAddStudentPayload {
  studentId: string;
  batch: string;
  firstName: string;
  lastName: string;
  type: string;
  gender: string;
  dateOfBirth: string;
  country: string;
  presentAddress: string;
  permanentAddress: string;
  maritalStatus: string;
  religion: string;
  imgUrl: string;
  email: string;
  phone: string;
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  experiences: IExperience[];
}

export interface IExperience {
  companyName: string;
  jobType: string;
  address: string;
  country: string;
  designation: string;
  startFrom: string;
  endFrom: string;
  isCurrentEmployee: boolean;
}

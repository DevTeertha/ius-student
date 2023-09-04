export interface IStudentPaginationResponse {
  count: number;
  students: IStudent[];
}

export interface IStudent {
  studentId: number;
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
  email: string | null;
  phone: string;
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  experiences: IExperience[];
  education: IEducation;
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

export interface IEducation {
  credits?: number;
  batch?: number;
  degreeType: string;
  department: string;
  seassonYear: number;
  graduationYear: number;
}

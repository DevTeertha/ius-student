export interface IStudentPaginationResponse {
  count: number;
  students: IStudent[];
}

export interface IStudent {
  studentId: number;
  batch: number;
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
  educations: IEducation[];
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
  instituteName: string;
  degreeType: string;
  degreeName: string;
  department: string;
  batch?: number;
  seassonYear: number;
  graduationYear: number;
  isCurrent: boolean;
}

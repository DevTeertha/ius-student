import { memo, useContext, useEffect, useState, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { ToastContext } from '../../shared/components/toast/Toast';

import { IExperience, IStudent } from './interface/student.interface';
import { IToastContext } from '../../shared/interface/toast.interface';

import NavbarComponent from '../navbar/NavbarComponent';
import UploadPhotoComponent from './UploadPhotoComponent';
import EducationFormComponent from './forms/EducationFormComponent';
import ExperienceFormComponent from './forms/ExperienceFormComponent';
import PersonalInformationFormComponent from './forms/PersonalInformationFormComponent';

import { createStudent, getOneStudent, updateStudent, uploadImage } from './studentService';
import { getErrorResponse } from '../../shared/service/utilService';
import { EJobType } from './enum/student.enum';

function AddOrEditStudentComponent({ studentId = null }: { studentId: string | null }) {
  const [file, setFile] = useState<string | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IStudent>();

  const {
    fields: experienceField,
    append: experienceAppend,
    remove: experienceRemove,
  } = useFieldArray({
    control,
    name: 'experiences',
  });

  const { errorState, successState, messageState } = useContext<IToastContext>(ToastContext);
  const [loading, setLoading] = useState<boolean>(false);
  const setIsError = errorState[1];
  const setIsSuccess = successState[1];
  const setMessage = messageState[1];
  const navigate = useNavigate();

  const addOrEdit = async (data: IStudent) => {
    if (studentId) {
      const res = await updateStudent(Number(studentId), data);
      setMessage(res?.message ?? 'Student updated succesfully');
    } else {
      const res = await createStudent(data);
      setMessage(res?.message ?? 'Student added succesfully');
    }
  };

  const onSubmit = async (data: IStudent) => {
    try {
      setLoading(true);
      if (file) {
        const fileResponse = await uploadImage(file);
        await addOrEdit({ ...data, imgUrl: fileResponse.data.url });
      } else {
        await addOrEdit(data);
      }
      setLoading(false);
      setIsSuccess(true);
      navigate('/');
    } catch (error) {
      const errorResponse = getErrorResponse(error);
      setMessage(errorResponse.message);
      setLoading(false);
      setIsError(true);
    }
  };

  const findOneStudent = async () => {
    if (studentId) {
      const studentResponse = await getOneStudent(studentId);
      updateForm(studentResponse.data);
    }
  };

  const updateForm = (student: IStudent) => {
    setImageURL(student?.imgUrl ?? null);
    Object.entries(student).map(([key, value]: [any, any]) => {
      if (key !== 'experiences' && key !== 'education') {
        setValue(key, value);
      }
      if (key === 'education') {
        Object.entries(student.education).map(([eduKey, eduValue]: [any, any]) => {
          const edKey: any = `education.${eduKey}`;
          setValue(edKey, eduValue);
        });
      }

      if (key === 'experiences') {
        student?.experiences?.map((experience: IExperience, index: number) => {
          experienceAppend({ companyName: '', jobType: EJobType.FULL_TIME, address: '', country: '', designation: '', startFrom: dayjs().format('YYYY-MM-DD'), endFrom: '', isCurrentEmployee: true });
          Object.entries(experience).map(([exKey, exValue]: [any, any]) => {
            const exNewKey: any = `experiences[${index}].${exKey}`;
            setValue(exNewKey, exValue);
          });
        });
      }
    });
  };

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      if (studentId) {
        findOneStudent();
      }
    }
  }, [studentId]);

  return (
    <>
      <NavbarComponent />
      <div className='container'>
        <div className='px-5 mt-5'>
          <h1 className='text-2xl font-bold'>Add / Edit Student</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UploadPhotoComponent
              context={{
                imageUrlState: [imageURL, setImageURL],
                fileState: [file, setFile],
              }}
            />
            <PersonalInformationFormComponent register={register} errors={errors} />
            <EducationFormComponent watch={watch} setValue={setValue} register={register} errors={errors} />
            <ExperienceFormComponent fields={experienceField} append={experienceAppend} remove={experienceRemove} register={register} errors={errors} />
            <div className='mt-3'>
              <Link to={'/'}>
                <button type='button' className='btn mr-3'>
                  Back
                </button>
              </Link>
              <button disabled={loading} className='btn bg-gray-900 text-white hover:bg-gray-950 hover:text-white'>
                {loading && <span className='loading loading-ring loading-md'></span>} {studentId ? <span>Save</span> : <span>Add</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(AddOrEditStudentComponent);

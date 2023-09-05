import { useContext, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Toast, { ToastContext } from '../../shared/components/toast/Toast';

import { IStudent } from './interface/student.interface';
import { EToastStatusType, IToastContext } from '../../shared/interface/toast.interface';

import NavbarComponent from '../navbar/NavbarComponent';
import UploadPhotoComponent from './UploadPhotoComponent';
import EducationFormComponent from './forms/EducationFormComponent';
import ExperienceFormComponent from './forms/ExperienceFormComponent';
import PersonalInformationFormComponent from './forms/PersonalInformationFormComponent';

import { createStudent, uploadImage } from './studentService';
import { getErrorResponse } from '../../shared/service/utilService';

function AddOrEditStudentComponent({ studentId = null }: { studentId: string | null }) {
  console.log('studentId: ', studentId);
  const [file, setFile] = useState<string | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
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
  const [isError, setIsError] = errorState;
  const [isSuccess, setIsSuccess] = successState;
  const [message, setMessage] = messageState;
  const navigate = useNavigate();

  const onSubmit = async (data: IStudent) => {
    try {
      setLoading(true);

      if (file) {
        const fileResponse = await uploadImage(file);
        const res = await createStudent({ ...data, imgUrl: fileResponse.data.url });
        setMessage(res?.message ?? 'Student added succesfully');
      } else {
        const res = await createStudent(data);
        setMessage(res?.message ?? 'Student added succesfully');
      }
      setLoading(false);
      setIsSuccess(true);
      navigate('/dashboard');
    } catch (error) {
      const errorResponse = getErrorResponse(error);
      setMessage(errorResponse.message);
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {isSuccess && <Toast status={EToastStatusType.SUCCESS} state={[isSuccess, setIsSuccess]} message={message} />}
      {isError && <Toast status={EToastStatusType.ERROR} state={[isError, setIsError]} message={message} />}
      <NavbarComponent />
      <div className='p-4 mt-5'>
        <div>
          <h1 className='text-2xl font-bold'>Add / Edit Student</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UploadPhotoComponent
              context={{
                imageUrlState: [imageURL, setImageURL],
                fileState: [file, setFile],
              }}
            />
            <PersonalInformationFormComponent register={register} errors={errors} />
            <EducationFormComponent register={register} errors={errors} />
            <ExperienceFormComponent fields={experienceField} append={experienceAppend} remove={experienceRemove} register={register} errors={errors} />
            <div className='mt-3'>
              <button type='button' className='btn mr-3'>
                <Link to={'/dashboard'}>Back</Link>
              </button>
              <button disabled={loading} className='btn bg-gray-900 text-white hover:bg-gray-950 hover:text-white'>
                {loading && <span className='loading loading-ring loading-md'></span>}Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddOrEditStudentComponent;

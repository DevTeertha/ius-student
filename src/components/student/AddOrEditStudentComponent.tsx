import { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import Toast, { ToastContext } from '../../shared/components/toast/Toast';

import { IAddStudentPayload } from './interface/student.interface';
import { EToastStatusType, IToastContext } from '../../shared/interface/toast.interface';

import NavbarComponent from '../navbar/NavbarComponent';

import PersonalInformationFormComponent from './forms/PersonalInformationFormComponent';
import ExperienceFormComponent from './forms/ExperienceFormComponent';
import EducationFormComponent from './forms/EducationFormComponent';

import { createStudent } from './studentService';
import { getErrorResponse } from '../../shared/service/utilService';

function AddOrEditStudentComponent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddStudentPayload>();
  const {
    fields: experienceField,
    append: experienceAppend,
    remove: experienceRemove,
  } = useFieldArray({
    control,
    name: 'experiences',
  });

  const {
    fields: educationField,
    append: educationAppend,
    remove: educationRemove,
  } = useFieldArray({
    control,
    name: 'educations',
  });

  const { errorState, successState, messageState } = useContext<IToastContext>(ToastContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = errorState;
  const [isSuccess, setIsSuccess] = successState;
  const [message, setMessage] = messageState;

  const onSubmit = async (data: IAddStudentPayload) => {
    try {
      setLoading(true);
      const res = await createStudent(data);
      setMessage(res?.message ?? 'Student added succesfully');
      setLoading(false);
      setIsSuccess(true);
    } catch (error) {
      const errorResponse = getErrorResponse(error);
      setMessage(errorResponse.message);
      setLoading(false);
      setIsError(true);
    }
  };
  return (
    <>
      {isSuccess && <Toast status={EToastStatusType.SUCCESS} state={[isSuccess, setIsSuccess]} message={message} />}
      {isError && <Toast status={EToastStatusType.ERROR} state={[isError, setIsError]} message={message} />}
      <NavbarComponent />
      <div className='p-4 mt-5'>
        <div>
          <h1 className='text-2xl font-bold'>Add / Edit Student</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInformationFormComponent register={register} errors={errors} />
            <ExperienceFormComponent fields={experienceField} append={experienceAppend} remove={experienceRemove} register={register} errors={errors} />
            <EducationFormComponent fields={educationField} append={educationAppend} remove={educationRemove} register={register} errors={errors} />
            <div className='mt-3'>
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

import { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ToastContext } from '../../shared/components/toast/Toast';

import { IAddStudentPayload } from './interface/student.interface';
import { IToastContext } from '../../shared/interface/toast.interface';

import NavbarComponent from '../navbar/NavbarComponent';
import PersonalInformationFormComponent from './forms/PersonalInformationFormComponent';
import ExperienceFormComponent from './forms/ExperienceFormComponent';

function AddOrEditStudentComponent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddStudentPayload>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences', // This should match the name of the field in your form
  });

  const { errorState, successState, messageState } = useContext<IToastContext>(ToastContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = errorState;
  const [isSuccess, setIsSuccess] = successState;
  const [message, setMessage] = messageState;
  const navigate = useNavigate();

  const onSubmit = (data: IAddStudentPayload) => {
    try {
      // setLoading(true);

      console.log('data: ', data);
    } catch (error) {}
  };
  return (
    <>
      <NavbarComponent />
      <div className='p-4 mt-5'>
        <div>
          <h1 className='text-2xl font-bold'>Add / Edit Student</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInformationFormComponent register={register} errors={errors} />
            <ExperienceFormComponent fields={fields} append={append} remove={remove} register={register} />
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

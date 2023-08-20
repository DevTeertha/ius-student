import { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ToastContext } from '../../shared/components/toast/Toast';

import { IAddStudentPayload } from './interface/student.interface';
import { IToastContext } from '../../shared/interface/toast.interface';

import { getErrorResponse } from '../../shared/service/utilService';

import NavbarComponent from '../navbar/NavbarComponent';
import { EStudentType, EGender, EMaritalStatus, EReligion, EJobType } from './enum/student.enum';

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

  const onSubmit = async (data: IAddStudentPayload): Promise<void> => {
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
            <div className='mt-6'>
              <h6>Personal Information</h6>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Student ID*</span>
                  </label>
                  <input
                    {...register('studentId', { required: true })}
                    type='number'
                    placeholder='Example: 212010110'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.studentId && 'border-red-600'}`}
                  />
                  {errors.studentId && <span className='text-red-600'>Student ID is required</span>}
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Batch (th)*</span>
                  </label>
                  <input
                    {...register('batch', { required: true })}
                    type='number'
                    placeholder='Example: 10'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.batch && 'border-red-600'}`}
                  />
                  {errors.batch && <span className='text-red-600'>Batch is required</span>}
                </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>First Name*</span>
                  </label>
                  <input
                    {...register('firstName', { required: true })}
                    type='text'
                    placeholder='Enter First Name'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.firstName && 'border-red-600'}`}
                  />
                  {errors.firstName && <span className='text-red-600'>First Name is required</span>}
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Last Name*</span>
                  </label>
                  <input
                    {...register('lastName', { required: true })}
                    type='text'
                    placeholder='Enter Last Name'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.lastName && 'border-red-600'}`}
                  />
                  {errors.lastName && <span className='text-red-600'>Last Name is required</span>}
                </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Email (optional)</span>
                  </label>
                  <input placeholder='Enter Email' {...register('email', { required: false })} type='text' className={`w-full input input-bordered input-light border-gray-500`} />
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Phone*</span>
                  </label>
                  <input
                    placeholder='Enter Phone'
                    {...register('phone', { required: false })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.phone && 'border-red-600'}`}
                  />
                  {errors.phone && <span className='text-red-600'>Phone no is required</span>}
                </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Type</span>
                  </label>
                  <select
                    defaultValue={EStudentType.REGULAR}
                    {...register('type', { required: true })}
                    className={`w-full input input-bordered input-light border-gray-500`}
                    name='type'
                    id='addStudentType'>
                    <option value={EStudentType.REGULAR}>Regular</option>
                    <option value={EStudentType.INTERNATIONAL}>International</option>
                    <option value={EStudentType.CREDIT_TRANSFER}>Credit Transfer</option>
                  </select>
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Gender</span>
                  </label>
                  <select
                    defaultValue={EGender.MALE}
                    {...register('gender', { required: true })}
                    className={`w-full input input-bordered input-light border-gray-500`}
                    name='gender'
                    id='addStudentGender'>
                    <option value={EGender.MALE}>Male</option>
                    <option value={EGender.FEMALE}>Female</option>
                    <option value={EGender.OTHER}>Other</option>
                  </select>
                </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Marital Status</span>
                  </label>
                  <select
                    defaultValue={EMaritalStatus.SINGLE}
                    {...register('maritalStatus', { required: true })}
                    className={`w-full input input-bordered input-light border-gray-500`}
                    name='maritalStatus'
                    id='addStudentMaritalStatus'>
                    <option value={EMaritalStatus.SINGLE}>Single</option>
                    <option value={EMaritalStatus.MARRIED}>Married</option>
                    <option value={EMaritalStatus.DEVORCED}>Devorced</option>
                  </select>
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Religion</span>
                  </label>
                  <select
                    defaultValue={EGender.MALE}
                    {...register('religion', { required: true })}
                    className={`w-full input input-bordered input-light border-gray-500`}
                    name='religion'
                    id='addStudentReligion'>
                    <option value={EReligion.HINDU}>Hindu</option>
                    <option value={EReligion.ISLAM}>Islam</option>
                    <option value={EReligion.BUDDHA}>Buddha</option>
                    <option value={EReligion.CHRISTIAN}>Christian</option>
                    <option value={EReligion.OTHER}>Others</option>
                  </select>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Date of birth</span>
                  </label>
                  <input {...register('dateOfBirth', { required: true })} type='date' className={`w-full input input-bordered input-light border-gray-500 ${errors.dateOfBirth && 'border-red-600'}`} />
                  {errors.dateOfBirth && <span className='text-red-600'>Date of birth is required</span>}
                </div>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Country*</span>
                  </label>
                  <input
                    placeholder='Enter Country'
                    {...register('country', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.country && 'border-red-600'}`}
                  />
                  {errors.country && <span className='text-red-600'>Country is required</span>}
                </div>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Present Address*</span>
                  </label>
                  <input
                    placeholder='Enter Present Address'
                    {...register('presentAddress', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.presentAddress && 'border-red-600'}`}
                  />
                  {errors.presentAddress && <span className='text-red-600'>Present Address is required</span>}
                </div>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Permanent Address*</span>
                  </label>
                  <input
                    placeholder='Enter Permanent Address'
                    {...register('permanentAddress', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.permanentAddress && 'border-red-600'}`}
                  />
                  {errors.permanentAddress && <span className='text-red-600'>Permanent Address is required</span>}
                </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Father's Name*</span>
                  </label>
                  <input
                    placeholder='Enter Father"s Name'
                    {...register('fatherName', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.fatherName && 'border-red-600'}`}
                  />
                  {errors.fatherName && <span className='text-red-600'>Father's Name is required</span>}
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Father's Phone (Optional)</span>
                  </label>
                  <input
                    placeholder='Enter Father"s Phone Address'
                    {...register('fatherPhone', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500`}
                  />
                </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Mother's Name*</span>
                  </label>
                  <input
                    placeholder='Enter Mother"s Name'
                    {...register('fatherName', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500 ${errors.motherName && 'border-red-600'}`}
                  />
                  {errors.motherName && <span className='text-red-600'>Mother's Name is required</span>}
                </div>
                <div>
                  <label className='label'>
                    <span className='text-base label-text'>Mother's Phone (Optional)</span>
                  </label>
                  <input
                    placeholder='Enter Mother"s Phone Address'
                    {...register('motherPhone', { required: true })}
                    type='text'
                    className={`w-full input input-bordered input-light border-gray-500`}
                  />
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <div className='flex justify-between items-center py-3'>
                <h5 className='text-xl font-bold'>Experience</h5>
                <button
                  type='button'
                  onClick={() => append({ companyName: '', jobType: '', address: '', country: '', designation: '', startFrom: new Date().toUTCString(), endFrom: '', isCurrentEmployee: true })}
                  className='btn btn-light text-xl font-bold'>
                  +
                </button>
              </div>
              {fields.map((field: any, index: number) => (
                <div key={field.id}>
                  <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div>
                      <label className='label'>
                        <span className='text-base label-text'>Company Name*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.companyName`)}
                        type='text'
                        placeholder='Enter Company Name'
                        defaultValue={field.companyName}
                        className={`w-full input input-bordered input-light border-gray-500`}
                      />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='text-base label-text'>Job Type*</span>
                      </label>
                      <select
                        defaultValue={EJobType.FULL_TIME}
                        {...register(`experiences.${index}.jobType`)}
                        className={`w-full input input-bordered input-light border-gray-500`}
                        name='jobType'
                        id='addStudentJobType'>
                        <option value={EJobType.FULL_TIME}>Full Time</option>
                        <option value={EJobType.PART_TIME}>Part Time</option>
                        <option value={EJobType.CONTRACT}>Contract</option>
                      </select>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div>
                      <label className='label'>
                        <span className='text-base label-text'>Address*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.address`)}
                        type='text'
                        placeholder='Enter Address'
                        defaultValue={field.address}
                        className={`w-full input input-bordered input-light border-gray-500`}
                      />
                    </div>
                    <div>
                      <div>
                        <label className='label'>
                          <span className='text-base label-text'>Country*</span>
                        </label>
                        <input
                          {...register(`experiences.${index}.country`)}
                          type='text'
                          placeholder='Enter Country'
                          defaultValue={field.country}
                          className={`w-full input input-bordered input-light border-gray-500`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='grid md:grid-cols-1 sm:grid-cols-1 gap-4'>
                    <div>
                      <label className='label'>
                        <span className='text-base label-text'>Designation*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.designation`)}
                        type='text'
                        placeholder='Enter Designation'
                        defaultValue={field.designation}
                        className={`w-full input input-bordered input-light border-gray-500`}
                      />
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div>
                      <label className='label'>
                        <span className='text-base label-text'>Start From*</span>
                      </label>
                      <input {...register(`experiences.${index}.startFrom`)} type='date' defaultValue={field.startFrom} className={`w-full input input-bordered input-light border-gray-500`} />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='text-base label-text'>End From*</span>
                      </label>
                      <input {...register(`experiences.${index}.endFrom`)} type='date' defaultValue={field.endFrom} className={`w-full input input-bordered input-light border-gray-500`} />
                    </div>
                  </div>
                  <div className='grid md:grid-cols-1 sm:grid-cols-1 gap-4'>
                    <div>
                      <div className='form-control'>
                        <label className='label cursor-pointer'>
                          <span className='label-text'>Are you currently working?</span>
                          <input {...register(`experiences.${index}.isCurrentEmployee`)} type='checkbox' checked={true} className='checkbox' />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <button className='text-red-600 font-semibold' type='button' onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
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

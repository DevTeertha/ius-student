import { useEffect } from 'react';
import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import dayjs from 'dayjs';

import { EJobType } from '../enum/student.enum';

import { IStudent } from '../interface/student.interface';
import { IPersonalInformationUseFormProps } from './PersonalInformationFormComponent';

export interface IExperienceUseFormProps extends IPersonalInformationUseFormProps {
  fields: FieldArrayWithId<IStudent, 'experiences', 'id'>[];
  append: UseFieldArrayAppend<IStudent, 'experiences'>;
  remove: UseFieldArrayRemove;
}

const ExperienceFormComponent = ({ fields, append, remove, register, errors }: IExperienceUseFormProps) => {
  useEffect(()=>{
    console.log('fields: ', fields);
    // append({ companyName: '', jobType: EJobType.FULL_TIME, address: '', country: '', designation: '', startFrom: dayjs().format('YYYY-MM-DD'), endFrom: '', isCurrentEmployee: true });
  },[])
  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center py-3'>
        <h5 className='text-xl font-bold'>Job Experience</h5>
        <button
          type='button'
          onClick={() =>
            append({ companyName: '', jobType: EJobType.FULL_TIME, address: '', country: '', designation: '', startFrom: dayjs().format('YYYY-MM-DD'), endFrom: '', isCurrentEmployee: true })
          }
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
                {...register(`experiences.${index}.companyName`, { required: true })}
                type='text'
                placeholder='Enter Company Name'
                defaultValue={field.companyName}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.experiences?.[`${index}`]?.companyName && 'border-red-600'}`}
              />
              {errors?.experiences?.[`${index}`]?.companyName && <span className='text-red-600'>Company Name is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Job Type</span>
              </label>
              <select {...register(`experiences.${index}.jobType`, { required: true })} className={`w-full input input-bordered input-light border-gray-500`} name='jobType'>
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
                {...register(`experiences.${index}.address`, { required: true })}
                type='text'
                placeholder='Enter Address'
                defaultValue={field.address}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.experiences?.[`${index}`]?.address && 'border-red-600'}`}
              />
              {errors?.experiences?.[`${index}`]?.address && <span className='text-red-600'>Address is required</span>}
            </div>
            <div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Country*</span>
                </label>
                <input
                  {...register(`experiences.${index}.country`, { required: true })}
                  type='text'
                  placeholder='Enter Country'
                  defaultValue={field.country}
                  className={`w-full input input-bordered input-light border-gray-500 ${errors?.experiences?.[`${index}`]?.country && 'border-red-600'}`}
                />
                {errors?.experiences?.[`${index}`]?.country && <span className='text-red-600'>Country is required</span>}
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-1 sm:grid-cols-1 gap-4'>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Designation*</span>
              </label>
              <input
                {...register(`experiences.${index}.designation`, { required: true })}
                type='text'
                placeholder='Enter Designation'
                defaultValue={field.designation}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.experiences?.[`${index}`]?.designation && 'border-red-600'}`}
              />
              {errors?.experiences?.[`${index}`]?.designation && <span className='text-red-600'>Designation is required</span>}
            </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Start From*</span>
              </label>
              <input
                {...register(`experiences.${index}.startFrom`, { required: true })}
                type='date'
                defaultValue={field.startFrom}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.experiences?.[`${index}`]?.startFrom && 'border-red-600'}`}
              />
              {errors?.experiences?.[`${index}`]?.startFrom && <span className='text-red-600'>Start Date is required</span>}
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
                  <span className='label-text font-semibold inline'>Are you currently working?</span>
                  <input {...register(`experiences.${index}.isCurrentEmployee`)} type='checkbox' className='checkbox' />
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
  );
};

export default ExperienceFormComponent;

import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';

import { EJobType } from '../enum/student.enum';
import { IAddStudentPayload } from '../interface/student.interface';

export interface IExperienceUseFormProps {
  register: UseFormRegister<IAddStudentPayload>;
  fields: FieldArrayWithId<IAddStudentPayload, 'experiences', 'id'>[];
  append: UseFieldArrayAppend<IAddStudentPayload, 'experiences'>;
  remove: UseFieldArrayRemove;
}

const ExperienceFormComponent = ({ fields, append, remove, register }: IExperienceUseFormProps) => {
  return (
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
  );
};

export default ExperienceFormComponent;

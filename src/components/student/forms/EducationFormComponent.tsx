import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { EDegreeType } from '../enum/student.enum';

import { IStudent } from '../interface/student.interface';

export interface IEducationUseFormProps {
  register: UseFormRegister<IStudent>;
  errors: FieldErrors<IStudent>;
}

const EducationFormComponent = ({ register, errors }: IEducationUseFormProps) => {
  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center py-3'>
        <h5 className='text-xl font-bold'>Academic Information</h5>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Credits</span>
          </label>
          <input {...register(`education.credits`)} type='number' placeholder='Example: 140' className={`w-full input input-bordered input-light border-gray-500`} />
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Batch*</span>
          </label>
          <input
            {...register(`education.batch`, { required: true })}
            type='number'
            placeholder='Enter Batch'
            className={`w-full input input-bordered input-light border-gray-500 ${errors?.education?.batch && 'border-red-600'}`}
          />
          {errors?.education?.batch && <span className='text-red-600'>Department is required</span>}
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Degree Type</span>
          </label>
          <select
            defaultValue={EDegreeType.BSC}
            {...register(`education.degreeType`, { required: true })}
            className={`w-full input input-bordered input-light border-gray-500`}
            name='degreeType'
            id='degreeType'>
            <option value={EDegreeType.BBA}>BBA</option>
            <option value={EDegreeType.BSC}>BSC</option>
            <option value={EDegreeType.MBA}>MBA</option>
            <option value={EDegreeType.MSC}>MSC</option>
          </select>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Department*</span>
          </label>
          <input
            {...register(`education.department`, { required: true })}
            type='text'
            placeholder='Example: Computer Science & Engineering'
            className={`w-full input input-bordered input-light border-gray-500 ${errors?.education?.department && 'border-red-600'}`}
          />
          {errors?.education?.department && <span className='text-red-600'>Department is required</span>}
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Session Year*</span>
          </label>
          <input
            {...register(`education.seassonYear`, { required: true })}
            type='number'
            placeholder='Enter Session Year'
            className={`w-full input input-bordered input-light border-gray-500 ${errors?.education?.seassonYear && 'border-red-600'}`}
          />
          {errors?.education?.seassonYear && <span className='text-red-600'>Session year is required</span>}
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Graduation Year*</span>
          </label>
          <input
            {...register(`education.graduationYear`, { required: true })}
            type='number'
            placeholder='Enter Graduation Year'
            className={`w-full input input-bordered input-light border-gray-500 ${errors?.education?.graduationYear && 'border-red-600'}`}
          />
          {errors?.education?.graduationYear && <span className='text-red-600'>Graduation year is required</span>}
        </div>
      </div>
    </div>
  );
};

export default EducationFormComponent;

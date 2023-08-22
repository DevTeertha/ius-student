import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';
import dayjs from 'dayjs';

import { EDegreeType, EJobType } from '../enum/student.enum';

import { IAddStudentPayload } from '../interface/student.interface';
import { IPersonalInformationUseFormProps } from './PersonalInformationFormComponent';

export interface IEducationUseFormProps extends IPersonalInformationUseFormProps {
  fields: FieldArrayWithId<IAddStudentPayload, 'educations', 'id'>[];
  append: UseFieldArrayAppend<IAddStudentPayload, 'educations'>;
  remove: UseFieldArrayRemove;
}

const EducationFormComponent = ({ fields, append, remove, register, errors }: IEducationUseFormProps) => {
  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center py-3'>
        <h5 className='text-xl font-bold'>Education</h5>
        <button
          type='button'
          onClick={() => append({ instituteName: '', credits: 0, degreeType: EDegreeType.BSC, degreeName: '', department: '', batch: 0, seassonYear: 2016, graduationYear: 2020, isCurrent: false })}
          className='btn btn-light text-xl font-bold'>
          +
        </button>
      </div>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Institute Name*</span>
              </label>
              <input
                {...register(`educations.${index}.instituteName`, { required: true })}
                type='text'
                placeholder='Enter Institute Name'
                defaultValue={field.instituteName}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.educations?.[`${index}`]?.instituteName && 'border-red-600'}`}
              />
              {errors?.educations?.[`${index}`]?.instituteName && <span className='text-red-600'>Institute Name is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Credits</span>
              </label>
              <input
                {...register(`educations.${index}.credits`)}
                type='number'
                placeholder='Example: 140'
                defaultValue={field.credits}
                className={`w-full input input-bordered input-light border-gray-500`}
              />
            </div>
          </div>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Degree Name*</span>
              </label>
              <input
                {...register(`educations.${index}.degreeName`, { required: true })}
                type='text'
                placeholder='Enter Degree Name'
                defaultValue={field.degreeName}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.educations?.[`${index}`]?.degreeName && 'border-red-600'}`}
              />
              {errors?.educations?.[`${index}`]?.degreeName && <span className='text-red-600'>Degree Name is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Degree Type</span>
              </label>
              <select {...register(`educations.${index}.degreeType`)} className={`w-full input input-bordered input-light border-gray-500`} name='degreeType'>
                <option value={EDegreeType.BBA}>BBA</option>
                <option value={EDegreeType.BSC}>BSC</option>
                <option value={EDegreeType.HSC}>HSC</option>
                <option value={EDegreeType.SSC}>SSC</option>
                <option value={EDegreeType.MBA}>MBA</option>
                <option value={EDegreeType.MSC}>MSC</option>
              </select>
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Department*</span>
              </label>
              <input
                {...register(`educations.${index}.department`, { required: true })}
                type='text'
                placeholder='Example: Computer Science & Engineering'
                defaultValue={field.department}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.educations?.[`${index}`]?.department && 'border-red-600'}`}
              />
              {errors?.educations?.[`${index}`]?.department && <span className='text-red-600'>Department is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Batch*</span>
              </label>
              <input
                {...register(`educations.${index}.batch`, { required: true })}
                type='number'
                placeholder='Enter Batch'
                defaultValue={field.department}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.educations?.[`${index}`]?.batch && 'border-red-600'}`}
              />
              {errors?.educations?.[`${index}`]?.batch && <span className='text-red-600'>Department is required</span>}
            </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Session Year*</span>
              </label>
              <input
                {...register(`educations.${index}.seassonYear`, { required: true })}
                type='number'
                placeholder='Enter Institute Name'
                defaultValue={field.seassonYear}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.educations?.[`${index}`]?.seassonYear && 'border-red-600'}`}
              />
              {errors?.educations?.[`${index}`]?.seassonYear && <span className='text-red-600'>Session year is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Graduation Year*</span>
              </label>
              <input
                {...register(`educations.${index}.graduationYear`, { required: true })}
                type='number'
                placeholder='Enter Institute Name'
                defaultValue={field.graduationYear}
                className={`w-full input input-bordered input-light border-gray-500 ${errors?.educations?.[`${index}`]?.graduationYear && 'border-red-600'}`}
              />
              {errors?.educations?.[`${index}`]?.graduationYear && <span className='text-red-600'>Graduation year is required</span>}
            </div>
          </div>
          <div className='grid md:grid-cols-10 sm:grid-cols-1 gap-4'>
            <div>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input {...register(`educations.${index}.isCurrent`)} type='checkbox' className='checkbox' />
                  <span className='label-text font-semibold inline'>Study running?</span>
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

export default EducationFormComponent;

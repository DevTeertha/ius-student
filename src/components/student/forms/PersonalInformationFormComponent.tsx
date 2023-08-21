import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { EStudentType, EGender, EMaritalStatus, EReligion } from '../enum/student.enum';
import { IAddStudentPayload } from '../interface/student.interface';

export interface IPersonalInformationUseFormProps {
  register: UseFormRegister<IAddStudentPayload>;
  errors: FieldErrors<IAddStudentPayload>;
}

const PersonalInformationFormComponent = ({ register, errors }: IPersonalInformationUseFormProps) => {
  return (
    <div className='mt-6'>
      <h5 className='text-xl font-bold'>Personal Inforamtion</h5>
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
          <select defaultValue={EStudentType.REGULAR} {...register('type', { required: true })} className={`w-full input input-bordered input-light border-gray-500`} name='type' id='addStudentType'>
            <option value={EStudentType.REGULAR}>Regular</option>
            <option value={EStudentType.INTERNATIONAL}>International</option>
            <option value={EStudentType.CREDIT_TRANSFER}>Credit Transfer</option>
          </select>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Gender</span>
          </label>
          <select defaultValue={EGender.MALE} {...register('gender', { required: true })} className={`w-full input input-bordered input-light border-gray-500`} name='gender' id='addStudentGender'>
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
          <input placeholder='Enter Father"s Phone Address' {...register('fatherPhone', { required: true })} type='text' className={`w-full input input-bordered input-light border-gray-500`} />
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
          <input placeholder='Enter Mother"s Phone Address' {...register('motherPhone', { required: true })} type='text' className={`w-full input input-bordered input-light border-gray-500`} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationFormComponent;

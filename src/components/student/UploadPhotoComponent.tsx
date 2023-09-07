import React from 'react';
import { ChangeEvent } from 'react';

export interface IUploadPhotoProps {
  imageUrlState: [string | null, React.Dispatch<React.SetStateAction<string | null>>];
  fileState: [any, React.Dispatch<React.SetStateAction<any | null>>];
}

export interface IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

const UploadPhotoComponent = ({ context }: { context: IUploadPhotoProps }) => {
  const { imageUrlState, fileState } = context;
  const [imageURL, setImageURL] = imageUrlState;
  const setFile = fileState[1];

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileTarget = e.target.files?.[0];
    if (fileTarget) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setImageURL(event.target.result as string);
      };
      reader.readAsDataURL(fileTarget);
      setFile(fileTarget);
    }
  };

  return (
    <div className='flex justify-center mt-8'>
      <div className='rounded-lg bg-gray-50 lg:w-full'>
        <div className='m-4'>
          <label className='inline-block mb-2 text-gray-500'>Upload Image(jpg,png,svg,jpeg)</label>
          <div className='flex items-center justify-center w-full'>
            <label className='flex flex-col w-full border-4 border-dashed hover:bg-gray-100 hover:border-gray-300'>
              <div className='flex flex-col items-center justify-center pt-7'>
                {imageURL ? (
                  <img className='w-full' src={imageURL} alt={imageURL} />
                ) : (
                  <>
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 text-gray-400 group-hover:text-gray-600' viewBox='0 0 20 20'>
                      <path d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' />
                    </svg>
                    <p className='pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600'>Select a photo</p>
                  </>
                )}
              </div>
              <input onChange={fileChangeHandler} type='file' className='opacity-0' />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoComponent;

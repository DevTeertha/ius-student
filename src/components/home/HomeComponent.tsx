import { memo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import StudentListComponent from '../student/StudentListComponent';

import { getStudents } from '../student/studentService';
import TransparentSpinner from '../../shared/components/spinner/TransparentSpinner';

export const PAGE_SIZE = 5;

function HomeComponent({ children, showAddButton = false }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['getStudents', { limit: PAGE_SIZE, offset: (currentPage - 1) * PAGE_SIZE }], getStudents);

  const handlePageClick = async (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
    queryClient.invalidateQueries(['getStudents', { limit: PAGE_SIZE, offset: (newPage - 1) * PAGE_SIZE }]);
  };

  return (
    <>
      {isLoading && <TransparentSpinner />}
      <div className='grid grid-flow-row-dense grid-cols-5 my-5'>
        <div className={showAddButton ? 'col-span-4' : 'col-span-5'}>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <input type='text' placeholder='Search…' className='input input-bordered w-full' />
              <button className='btn btn-square w-14'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {children}
      </div>
      <StudentListComponent handlePageClick={handlePageClick} count={data?.data?.count ?? 0} students={data?.data?.students ?? []} />
    </>
  );
}

export default memo(HomeComponent);

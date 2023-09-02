import { useState } from 'react';
import { Card } from 'react-daisyui';

import { IStudent } from './interface/student.interface';

import Pagination from '../../shared/components/toast/Pagination';

function StudentListComponent({ data }: { data: IStudent[] }) {
  let itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='grid grid-flow-row lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1'>
        {data?.map((student: IStudent) => (
          <Card>
            <Card.Image src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
            <Card.Body className='p-4'>
              <div className='flex justify-between'>
                <p className='font-bold text-xs badge badge-primary'>Batch: #{student?.batch}</p>
                <p className='font-bold text-end text-xs'>{student?.studentId}</p>
              </div>
              <Card.Title tag='h6' className='text-sm'>
                {student?.firstName + ' ' + student?.lastName}
              </Card.Title>
              <div>
                {student?.email && (
                  <p className='text-xs'>
                    <b>Email: </b>
                    {student.email}
                  </p>
                )}
                {student?.phone && (
                  <p className='text-xs'>
                    <b>Phone: </b>
                    {student.phone}
                  </p>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination itemOffset={itemOffset} data={data} handlePageClick={handlePageClick} itemsPerPage={itemsPerPage} />
    </>
  );
}

export default StudentListComponent;

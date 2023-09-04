import { Link } from 'react-router-dom';
import { Card } from 'react-daisyui';

import { IStudent } from './interface/student.interface';

import Pagination from '../../shared/components/toast/Pagination';

export const itemsPerPage = 5;
function StudentListComponent({ students, count, handlePageClick }: { students: IStudent[]; count: number; handlePageClick: (event: any) => void }) {
  return (
    <>
      <div className='grid grid-flow-row lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1'>
        {students?.map((student: IStudent, key: number) => (
          <Link to={`/students/${student.studentId}`} key={'student_list_' + key}>
            <Card>
              <Card.Image className='w-[228px] h-[228px]' src={student?.imgUrl ? student.imgUrl : '/default_avatar.webp'} alt='Avatar' />
              <Card.Body className='p-4'>
                <div className='flex justify-between'>
                  {student?.education?.batch && <p className='font-bold text-xs badge badge-primary'>Batch: #{student.education.batch}</p>}
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
          </Link>
        ))}
      </div>
      <Pagination count={count} handlePageClick={handlePageClick} itemsPerPage={itemsPerPage} />
    </>
  );
}

export default StudentListComponent;

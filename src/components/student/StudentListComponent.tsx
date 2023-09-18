import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Modal } from 'react-daisyui';

import { PAGE_SIZE } from '../home/HomeComponent';

import { IStudent } from './interface/student.interface';

import Pagination from '../../shared/components/toast/Pagination';

function StudentListComponent({
  students,
  count,
  handlePageClick,
  showAdminActionButton,
}: {
  students: IStudent[];
  count: number;
  handlePageClick: (event: any) => void;
  showAdminActionButton: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return (
    <>
      <div className='grid grid-flow-row lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {students.length ? (
          students?.map((student: IStudent, key: number) => (
            <div key={'student_list_' + key}>
              <Card>
                <Link to={`/students/${student.studentId}`}>
                  <Card.Image className='w-full h-[228px]' src={student?.imgUrl ?? '/default_avatar.webp'} alt='Avatar' />
                  <Card.Body className='p-4'>
                    <div className='flex justify-between'>
                      {student?.education?.batch && <p className='font-bold text-xs badge badge-primary'>Batch: #{student.education.batch}</p>}
                      <p className='font-bold text-end text-xs'>{student?.studentId}</p>
                    </div>
                    <Card.Title tag='h6' className='text-sm'>
                      {student?.firstName + ' ' + student?.lastName}
                    </Card.Title>
                    <div>{student?.education?.department && <p className='text-xs font-semibold'>{student.education.department}</p>}</div>
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
                </Link>
                {showAdminActionButton && (
                  <div className='card-actions justify-end'>
                    <Link to={`/students/edit/${student.studentId}`}>
                      <button type='button' className='btn btn-outline btn-neutral'>
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        return handleShow();
                      }}
                      type='button'
                      className='btn btn-error'>
                      Delete
                    </button>
                  </div>
                )}
              </Card>
            </div>
          ))
        ) : (
          <p className='text-center py-4 col-span-4'>No student found</p>
        )}
      </div>
      <Modal ref={ref}>
        <Modal.Header className='font-bold'>Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click the button below to close</Modal.Body>
        <Modal.Actions>
          <Button className='btn btn-primary'>Save</Button>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
      <Pagination count={count} handlePageClick={handlePageClick} PAGE_SIZE={PAGE_SIZE} />
    </>
  );
}

export default StudentListComponent;

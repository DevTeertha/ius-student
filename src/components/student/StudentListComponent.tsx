import { useRef, useCallback, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Modal } from 'react-daisyui';
import { useQueryClient } from 'react-query';

import { PAGE_SIZE } from '../home/HomeComponent';

import Pagination from '../../shared/components/toast/Pagination';
import { ToastContext } from '../../shared/components/toast/Toast';

import { IStudent } from './interface/student.interface';
import { IToastContext } from '../../shared/interface/toast.interface';

import { deleteStudent } from './studentService';
import { getErrorResponse } from '../../shared/service/utilService';

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
  const { errorState, successState, messageState } = useContext<IToastContext>(ToastContext);
  const queryClient = useQueryClient();
  const [deletableId, setDeletableId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const setIsError = errorState[1];
  const setIsSuccess = successState[1];
  const setMessage = messageState[1];

  const ref = useRef<HTMLDialogElement>(null);

  const handleDeleteStudent = async () => {
    if (deletableId) {
      try {
        setLoading(true);
        const deleteResponse = await deleteStudent(deletableId);
        setMessage(deleteResponse?.message ?? 'Student deleted succesfully');
        setLoading(false);
        setIsSuccess(true);
        handleClose();
        queryClient.invalidateQueries(['getStudents', { limit: PAGE_SIZE, offset: 0 }]);
      } catch (error) {
        const errorResponse = getErrorResponse(error);
        setMessage(errorResponse.message);
        setLoading(false);
        setIsError(true);
      }
    }
  };

  const handleShow = useCallback(
    (id: number) => {
      ref.current?.showModal();
      setDeletableId(() => id);
    },
    [ref]
  );

  const handleClose = () => {
    ref.current?.close();
    setDeletableId(() => null);
  };

  return (
    <>
      <div className='grid grid-flow-row xl:grid-cols-5 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
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
                        return handleShow(Number(student.studentId));
                      }}
                      type='button'
                      className='btn bg-red-600 hover:bg-red-700 text-white'>
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
        <Modal.Header className='font-bold'>Delete</Modal.Header>
        <Modal.Body>Are you sure? you want to delete this student? id = {deletableId}</Modal.Body>
        <Modal.Actions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={loading} onClick={handleDeleteStudent} className='btn btn-error'>
            {loading && <span className='loading loading-ring loading-lg'></span>} Delete
          </Button>
        </Modal.Actions>
      </Modal>
      <Pagination count={count} handlePageClick={handlePageClick} PAGE_SIZE={PAGE_SIZE} />
    </>
  );
}

export default StudentListComponent;

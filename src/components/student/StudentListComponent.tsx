import { Card } from 'react-daisyui';
import { IStudent } from './interface/student.interface';

function StudentListComponent({ data }: { data: IStudent[] }) {
  console.log('data: ', data);
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
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default StudentListComponent;

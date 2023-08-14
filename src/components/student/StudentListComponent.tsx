import { Card, Button } from 'react-daisyui';

function StudentListComponent() {
  return (
    <>
      <div className='grid grid-flow-row lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1'>
        <Card>
          <Card.Image src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
          <Card.Body>
            <Card.Title tag='h2'>Shoes!</Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Card.Actions className='justify-end'>
              <Button color='ghost'>Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default StudentListComponent;

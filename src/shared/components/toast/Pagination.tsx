import ReactPaginate from 'react-paginate';

export interface IPaginationParams {
  itemsPerPage: number;
  handlePageClick: (event: any) => void;
  count: number;
}

const Pagination = ({ itemsPerPage, handlePageClick, count }: IPaginationParams) => {
  const pageCount = Math.ceil(count / itemsPerPage);
  return (
    <ReactPaginate
      containerClassName='flex items-center justify-center mt-8 mb-4'
      pageClassName='mx-3 block border border-solid border-gray-700 hover:bg-gray-500 flex items-center justify-center rounded-md h-10 w-10'
      pageLinkClassName='cursor-pointer flex items-center justify-center h-10 w-10 hover:text-white'
      breakLabel='...'
      nextLabel={
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      }
      onPageChange={handlePageClick}
      pageCount={pageCount}
      previousLabel={
        <span className='flex'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </span>
      }
      activeClassName='bg-primary text-white'
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

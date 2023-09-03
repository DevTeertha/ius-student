const TransparentSpinner = () => {
  return (
    <div className='bg-black-transparent absolute top-0 left-0 h-screen w-full z-[1] overflow-hidden'>
      <div className='relative w-full h-full'>
        <span className='absolute translate-x-[-50%] translate-y-[-50%] top-2/4 left-2/4 loading loading-dots loading-lg bg-white text-white'></span>
      </div>
    </div>
  );
};

export default TransparentSpinner;

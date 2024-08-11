function Loader() {
  return (
    <div className='bar w-[200px] h-[12.5px] rotate-[-15deg] animate-[up-down6123_3s_ease-in-out_1s_infinite_alternate] rounded-[30px] bg-[#ffdaaf]'>
      <div className='ball relative left-[calc(100%_-_20px)] w-[50px] h-[50px] animate-[ball-move8234_3s_ease-in-out_1s_infinite_alternate] rounded-[50%] bottom-[50px] after:absolute after:content-[] after:w-[5px] after:h-[5px] after:rounded-[50%] after:right-[5px] after:top-[25px] bg-white after:bg-black'></div>
    </div>
  );
}

export default Loader;

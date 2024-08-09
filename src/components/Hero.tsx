const Hero = () => {
  return (
    <div>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>

      <section className='relative pt-12 overflow-hidden'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16'>
            <div>
              <h1 className='text-4xl text-white lg:text-5xl xl:text-6xl lg:mt-12'>
                The Git Bit Counter
              </h1>
              <p className='mt-4 text-lg font-normal text-gray-400 sm:mt-8'>
                Save yourself from a repo bloat | Byte-sized info for your
                GitHub repos
              </p>

              <div className='relative mt-8 rounded-full sm:mt-12'>
                <div className='relative'>
                  <div className='absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500'></div>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='github repo link'
                      className='block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-7 sm:py-5 focus:border-transparent focus:ring-0'
                    />
                  </div>
                </div>
                <div className='sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90'
                  >
                    Check Size
                  </button>
                </div>
              </div>

              <div className='mt-8 sm:mt-12'></div>
            </div>

            <div className='relative'>
              <p className='text-white'>hey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;

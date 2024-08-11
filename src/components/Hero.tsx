import { useEffect, useState } from 'react';
import Data from './Data';
import { GitHubResponse } from '../type';
import Loader from './Loader';

type Props = {
  getRepoSize: (repoURL: string) => void;
  data: GitHubResponse | undefined;
  error: string;
  isLoading: boolean;
};

const Hero = ({ data, getRepoSize, error, isLoading }: Props) => {
  const [repoURL, setRepoURL] = useState<string>('');

  const handleClick = () => {
    getRepoSize(repoURL);
    setRepoURL('');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        getRepoSize(repoURL);
        setRepoURL('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [repoURL]);

  return (
    <div>
      <section className='relative pt-12 overflow-hidden'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16'>
            <div>
              <h1 className='text-4xl text-white lg:text-5xl xl:text-6xl mt-6 lg:mt-16'>
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
                      className='block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-7 sm:py-5 focus:border-transparent focus:ring-0 outline-none'
                      value={repoURL}
                      onChange={(e) => setRepoURL(e.target.value)}
                    />
                  </div>
                </div>
                <div className='sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90'
                    onClick={() => handleClick()}
                  >
                    Check Repo
                  </button>
                </div>
              </div>

              <div className='mt-8 sm:mt-12'></div>
            </div>

            <div className='relative'>
              {error ? (
                <div className='bg-gray-800 border border-gray-800 shadow-lg rounded-2xl px-4 py-12 lg:mt-32'>
                  <p className='text-white text-2xl text-center'>{error} :)</p>
                </div>
              ) : null}
              {isLoading ? (
                <div className='flex flex-col items-center justify-center gap-4 shadow-lg rounded-2xl px-4 py-12 lg:mt-32'>
                  <Loader />
                  <p className='text-white text-2xl text-center mt-8'>
                    Loading...
                  </p>
                </div>
              ) : null}
              {data && !error ? <Data data={data} /> : null}
            </div>
          </div>
        </div>
        <a
          href='https://github.com/AmanuelCh/git-bit'
          className='github-corner'
          aria-label='View source on GitHub'
          target='_blank'
        >
          <svg
            width='80'
            height='80'
            viewBox='0 0 250 250'
            fill='#151513'
            color='#fff'
            aria-hidden='true'
          >
            <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z'></path>
            <path
              d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
              fill='currentColor'
              className='octo-arm'
            ></path>
            <path
              d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
              fill='currentColor'
            ></path>
          </svg>
        </a>
      </section>
    </div>
  );
};
export default Hero;

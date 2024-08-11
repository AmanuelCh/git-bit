import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { GitHubResponse } from '../type';
import starSVG from './starSVG.svg';

type Props = {
  data: GitHubResponse;
};

const Data = ({ data }: Props) => {
  const checkSize = (size: number) => {
    if (size >= 800 && size < 800000) return (size / 1024).toFixed(2);
    if (size >= 800000) return (size / 1048576).toFixed(2);
    return size;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', { autoClose: 2000 });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='container m-4'>
        <div className='max-w-3xl w-full mx-auto grid gap-4 grid-cols-1'>
          <div className='flex flex-col sticky top-0 z-10'>
            <div className='bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4'>
              <div className='flex-none sm:flex'>
                <div className='flex-auto sm:ml-5 justify-evenly'>
                  <div className='flex items-center justify-between sm:mt-2'>
                    <div className='flex items-center'>
                      <div className='flex flex-col'>
                        <div className='w-full flex-none text-gray-200 font-bold leading-none'>
                          <p className='capitalize text-2xl'>{data.name}</p>
                        </div>
                        <div className='flex-auto text-gray-400 my-1 mt-2'>
                          <p>
                            {data.description
                              ? data.description
                              : 'No description provided'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div className='flex-1 inline-flex items-center ml-2 space-x-2'></div>
                  </div>
                  <div className='flex gap-6 flex-wrap pt-2 text-sm text-gray-400 sm:gap-12 sm:items-center'>
                    <p className='flex items-center gap-[6px]'>
                      <img src={starSVG} />
                      {data.stargazers_count} stars
                    </p>

                    <p className='flex items-center gap-[8px]'>
                      <span>💻</span> {data.language}
                    </p>

                    <a
                      href={`https://github.com/${data.full_name}/archive/refs/heads/${data.default_branch}.zip`}
                      target='_blank'
                      className='btn'
                    >
                      DOWNLOAD
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-4 '>
            <div className='col-span-12 sm:col-span-4'>
              <div className='box-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-14 w-14  absolute bottom-4 right-3 text-green-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                </svg>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-200'>Size</p>
                </div>
                <div className='text-2xl text-gray-100 font-medium leading-8 mt-5'>
                  {checkSize(data.size)}
                </div>
                <div className='text-sm text-gray-500'>
                  {data.size >= 800 && data.size < 800000
                    ? 'MB'
                    : data.size >= 800000
                    ? 'GB'
                    : 'KB'}
                </div>
              </div>
            </div>
            <div className='col-span-12 sm:col-span-4'>
              <div className='box-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-14 w-14  absolute bottom-4 right-3 text-blue-500'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
                </svg>
                <div className='flex justify-between items-center'>
                  <i className='fab fa-behance text-xl text-gray-400'></i>
                </div>
                <div className='text-2xl text-gray-100 font-medium leading-8 mt-5'>
                  {data.open_issues}
                </div>
                <div className='text-sm text-gray-500'>Issues</div>
              </div>
            </div>
            <div className='col-span-12 sm:col-span-4'>
              <div className='box-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-14 w-14  absolute bottom-4 right-3 text-yellow-300'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <div className='flex justify-between items-center '>
                  <i className='fab fa-codepen text-xl text-gray-400'></i>
                </div>
                <div className='text-2xl text-gray-100 font-medium leading-8 mt-5'>
                  {data.forks}
                </div>
                <div className='text-sm text-gray-500'>Forks</div>
              </div>
            </div>
          </div>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col py-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl'>
              <div>
                <div className='flex flex-col justify-center px-6 lg:px-4'>
                  <div className='w-full flex justify-center'>
                    <div className='py-4 w-40'>
                      <img
                        src={data.owner.avatar_url}
                        className='rounded-full border-green-600'
                        alt='avatar url'
                      />
                    </div>
                  </div>
                  <p className='text-sm text-gray-500 mb-1'>
                    Repo:{' '}
                    <a
                      href={`https://github.com/${data.full_name}`}
                      target='_blank'
                    >
                      <span className='text-gray-300'>{data.full_name}</span>
                    </a>
                  </p>
                  <p className='text-sm text-gray-500 mb-1'>
                    Owner:{' '}
                    <a
                      href={`https://github.com/${data.owner.login}`}
                      target='_blank'
                    >
                      <span className='text-gray-300'> {data.owner.login}</span>
                    </a>
                  </p>
                  <p className='text-sm text-gray-500 mb-1'>
                    Topics:{' '}
                    <span className='text-gray-300'>
                      {data.topics.length
                        ? data.topics.join(', ')
                        : 'No topics provided'}
                    </span>
                  </p>
                  <p className='text-sm text-gray-500 mb-1'>
                    Clone:{' '}
                    <span className='text-gray-300'>{data.clone_url}</span>
                  </p>
                </div>
                <div className='p-3 mt-2 text-center space-x-4 md:block'>
                  <button
                    className='btn'
                    onClick={() => copyToClipboard(data.clone_url)}
                  >
                    Clone repo
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-4'>
              <div className='box'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center mr-auto'>
                    <div className='flex flex-col ml-3 gap-1'>
                      <div className='font-medium text-gray-100'>
                        {new Date(data.created_at).toUTCString()}
                      </div>
                      <p className='text-sm text-gray-500 leading-none mt-1'>
                        Created at
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='box'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center mr-auto'>
                    <div className='flex flex-col ml-3 min-w-0 gap-1'>
                      <div className='font-medium text-gray-100'>
                        {new Date(data.updated_at).toUTCString()}
                      </div>
                      <p className='text-sm text-gray-500 leading-none mt-1 truncate'>
                        Last updated at
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='box'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center mr-auto'>
                    <div className='flex flex-col ml-3 min-w-0 gap-1'>
                      <div className='font-medium leading-none text-gray-100'>
                        {data.default_branch}
                      </div>
                      <p className='text-sm text-gray-500 leading-none mt-1 truncate'>
                        Default branch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='box'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center mr-auto'>
                    <div className='flex flex-col ml-3 min-w-0 gap-1'>
                      <div className='font-medium leading-none text-gray-100'>
                        {data.watchers_count}
                      </div>
                      <p className='text-sm text-gray-500 leading-none mt-1 truncate'>
                        Watchers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='flex flex-col'>
                    <div className='font-medium leading-none text-gray-100 text-2xl'>
                      {data.allow_forking ? 'Yes' : 'No'}
                    </div>
                    <p className='text-sm text-gray-500 leading-none mt-1'>
                      Allows forking
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='flex'>
                <div className='flex flex-col justify-center w-full px-2 py-1'>
                  <div className='flex justify-between items-center '>
                    <div className='flex flex-col'>
                      <h2 className='font-medium leading-none text-gray-100'>
                        {data?.license?.name ? data.license.name : 'No license'}
                      </h2>
                    </div>
                  </div>
                  <div className='flex pt-2  text-sm text-gray-500'>
                    <div className='flex items-center mr-auto'>
                      <p className='font-normal'>License</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Hero from './components/Hero';
import { GitHubResponse } from './type';

function App() {
  const [data, setData] = useState<GitHubResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

  async function getRepoSize(repoUrl: string) {
    setError('');
    setData(undefined);

    // Validate and extract owner and repo name from the URL
    const [owner, repo] = extractRepoDetails(repoUrl);
    if (!owner || !repo) {
      setError('Invalid GitHub repository URL');
      return; // Exit early if the URL is invalid
    }

    try {
      const repoData = await fetchRepoData(owner, repo);
      setData(repoData);
      setIsLoading(false);
    } catch (err: any) {
      setError(
        err.message || 'An error occurred while fetching the repository data.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  function extractRepoDetails(repoUrl: string): [string | null, string | null] {
    const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
    const match = repoUrl.match(regex);
    return match ? [match[1], match[2]] : [null, null];
  }

  async function fetchRepoData(owner: string, repo: string) {
    setIsLoading(true);

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    if (!response.ok) {
      setIsLoading(false);
      const errorData = await response.json(); // Get error details from response
      throw new Error(errorData.message || 'Failed to fetch repository data');
    }

    return await response.json();
  }

  return (
    <>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      <Hero
        data={data}
        getRepoSize={getRepoSize}
        error={error}
        isLoading={isLoading}
      />
      <ToastContainer limit={1} />
    </>
  );
}

export default App;

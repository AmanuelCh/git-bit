import { useState } from 'react';
import Hero from './components/Hero';
import { GitHubResponse } from './type';

function App() {
  const sampleRes = {
    id: 783229673,
    node_id: 'R_kgDOLq8i6Q',
    name: 'hahu',
    full_name: 'AmanuelCh/hahu',
    private: false,
    owner: {
      login: 'AmanuelCh',
      id: 122665085,
      node_id: 'U_kgDOB0-4fQ',
      avatar_url: 'https://avatars.githubusercontent.com/u/122665085?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/AmanuelCh',
      html_url: 'https://github.com/AmanuelCh',
      followers_url: 'https://api.github.com/users/AmanuelCh/followers',
      following_url:
        'https://api.github.com/users/AmanuelCh/following{/other_user}',
      gists_url: 'https://api.github.com/users/AmanuelCh/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/AmanuelCh/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/AmanuelCh/subscriptions',
      organizations_url: 'https://api.github.com/users/AmanuelCh/orgs',
      repos_url: 'https://api.github.com/users/AmanuelCh/repos',
      events_url: 'https://api.github.com/users/AmanuelCh/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/AmanuelCh/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/AmanuelCh/hahu',
    description:
      'a wrapper around JavaScript which functions as a mini programming language',
    fork: false,
    url: 'https://api.github.com/repos/AmanuelCh/hahu',
    forks_url: 'https://api.github.com/repos/AmanuelCh/hahu/forks',
    keys_url: 'https://api.github.com/repos/AmanuelCh/hahu/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/AmanuelCh/hahu/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/AmanuelCh/hahu/teams',
    hooks_url: 'https://api.github.com/repos/AmanuelCh/hahu/hooks',
    issue_events_url:
      'https://api.github.com/repos/AmanuelCh/hahu/issues/events{/number}',
    events_url: 'https://api.github.com/repos/AmanuelCh/hahu/events',
    assignees_url:
      'https://api.github.com/repos/AmanuelCh/hahu/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/AmanuelCh/hahu/branches{/branch}',
    tags_url: 'https://api.github.com/repos/AmanuelCh/hahu/tags',
    blobs_url: 'https://api.github.com/repos/AmanuelCh/hahu/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/AmanuelCh/hahu/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/AmanuelCh/hahu/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/AmanuelCh/hahu/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/AmanuelCh/hahu/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/AmanuelCh/hahu/languages',
    stargazers_url: 'https://api.github.com/repos/AmanuelCh/hahu/stargazers',
    contributors_url:
      'https://api.github.com/repos/AmanuelCh/hahu/contributors',
    subscribers_url: 'https://api.github.com/repos/AmanuelCh/hahu/subscribers',
    subscription_url:
      'https://api.github.com/repos/AmanuelCh/hahu/subscription',
    commits_url: 'https://api.github.com/repos/AmanuelCh/hahu/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/AmanuelCh/hahu/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/AmanuelCh/hahu/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/AmanuelCh/hahu/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/AmanuelCh/hahu/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/AmanuelCh/hahu/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/AmanuelCh/hahu/merges',
    archive_url:
      'https://api.github.com/repos/AmanuelCh/hahu/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/AmanuelCh/hahu/downloads',
    issues_url: 'https://api.github.com/repos/AmanuelCh/hahu/issues{/number}',
    pulls_url: 'https://api.github.com/repos/AmanuelCh/hahu/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/AmanuelCh/hahu/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/AmanuelCh/hahu/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/AmanuelCh/hahu/labels{/name}',
    releases_url: 'https://api.github.com/repos/AmanuelCh/hahu/releases{/id}',
    deployments_url: 'https://api.github.com/repos/AmanuelCh/hahu/deployments',
    created_at: '2024-04-07T09:53:01Z',
    updated_at: '2024-06-17T20:20:34Z',
    pushed_at: '2024-04-09T15:09:22Z',
    git_url: 'git://github.com/AmanuelCh/hahu.git',
    ssh_url: 'git@github.com:AmanuelCh/hahu.git',
    clone_url: 'https://github.com/AmanuelCh/hahu.git',
    svn_url: 'https://github.com/AmanuelCh/hahu',
    homepage: '',
    size: 5674,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['hahu', 'javascript', 'mini-program', 'programming-language'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
    temp_clone_token: null,
    network_count: 0,
    subscribers_count: 1,
  };

  const [data, setData] = useState<GitHubResponse>(sampleRes);
  const [error, setError] = useState<string>('');

  async function getRepoSize(repoUrl: string) {
    setError('');

    // Extract owner and repo name from the URL
    const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
    const match = repoUrl.match(regex);
    if (!match) {
      setError('Invalid GitHub repository URL');
      throw new Error(error);
    }
    const owner = match[1];
    const repo = match[2];
    // Fetch repository data
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`
    );

    if (!response.ok) {
      setError('Repository not found or API limit exceeded');
      throw new Error(error);
    }
    const data = await response.json();
    setData(data);
  }

  return (
    <>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      <Hero
        data={data}
        getRepoSize={getRepoSize}
        error={error}
      />
    </>
  );
}

export default App;

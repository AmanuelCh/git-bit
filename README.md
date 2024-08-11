# Git-Bit: I count the bits so you don't have to!

Ever wondered how big that repository really is, or wanted to quickly get a handle on its key stats? Git-Bit is here to help! 

This website provides a quick and easy way to get valuable information about any GitHub repository, with a focus on size, but offering much more than just that. 

## Features

- **Fetch Repository Data**: Enter a GitHub repository URL to fetch its details.
- **Download Repositories**: Easily download the repository as a ZIP file.
- **User-Friendly Interface**: straightforward and minimal UI

## Getting Started

Clone the repository

```bash
git clone https://github.com/AmanuelCh/git-bit.git
```

Navigate to the project directory and install dependencies

```bash
npm install
```

Create a `.env` file in the root of the project and add your GitHub access token

```bash
VITE_GITHUB_ACCESS_TOKEN=your_personal_access_token
```

Finally run the dev server

```bash
npm run dev
```
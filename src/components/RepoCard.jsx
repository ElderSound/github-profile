import React from 'react';

const RepoCard = ({ repo, formatDate }) => (
    //console.log("repo", repo),
  <a
    href={repo.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 rounded-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
    style={{ background: 'linear-gradient(95deg, #111729 3%, #1d1b48 99.61%)' }}
  >
    <h3 className="text-sm font-semibold text-white mb-2">{repo.name}</h3>
    <p className="text-gray-300 text-xs mb-4 line-clamp-2">{repo.description}</p>

    

    <div className="flex items-center justify-left gap-4 text-xs text-gray-400">
      {/* LICENCIA “MIT” */}
    {/* {repo.license?.spdx_id === 'MIT' && ( */}
    {/* TODAS LAS LICENCIAS */}
    {repo.license?.spdx_id && (
      <div className="flex items-center justify-center gap-1 ">
        {/* SVG de licencia */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M16.8 16.4L15 17.75C13.2222 19.0833 10.7778 19.0833 9 17.75L7.2 16.4C5.18555 14.8892 4 12.5181 4 10V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.5181 18.8144 14.8892 16.8 16.4Z"
            stroke="#97A3B6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="10" r="1" fill="#97A3B6" />
          <circle cx="9" cy="10" r="1" fill="#97A3B6" />
          <circle cx="15" cy="10" r="1" fill="#97A3B6" />
        </svg>
        <span className="text-[#97A3B6] text-xs font-semibold">
          {repo.license.spdx_id}
        </span>
      </div>
    )}
      <span className="flex items-center space-x-1">
        {/* forks icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="15"
            width="4"
            height="4"
            rx="2"
            transform="rotate(90 18 15)"
            stroke="#97A3B6"
            strokeWidth="2"
          />
          <rect
            x="6"
            y="8"
            width="4"
            height="4"
            rx="2"
            transform="rotate(-90 6 8)"
            stroke="#97A3B6"
            strokeWidth="2"
          />
          <path
            d="M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14"
            stroke="#97A3B6"
            strokeWidth="2"
          />
        </svg>
        <span>{repo.forks}</span>
      </span>

      <span className="flex items-center space-x-1">
        {/* stars icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1439 6.62753C10.9305 4.66653 11.3238 3.68604 12.0001 3.68604C12.6764 3.68604 13.0697 4.66653 13.8563 6.62753L13.893 6.71885C14.3373 7.82672 14.5595 8.38065 15.0124 8.71734C15.4652 9.05403 16.0597 9.10727 17.2486 9.21374L17.4636 9.23299C19.4094 9.40726 20.3823 9.49439 20.5905 10.1134C20.7986 10.7324 20.0761 11.3897 18.6311 12.7044L18.1488 13.1432C17.4173 13.8087 17.0515 14.1414 16.8811 14.5776C16.8493 14.6589 16.8228 14.7423 16.8019 14.8271C16.6899 15.2817 16.797 15.7645 17.0112 16.7299L17.0778 17.0305C17.4715 18.8048 17.6684 19.692 17.3247 20.0746C17.1963 20.2176 17.0293 20.3206 16.8439 20.3712C16.3477 20.5066 15.6433 19.9325 14.2343 18.7844C13.3091 18.0305 12.8465 17.6536 12.3154 17.5688C12.1065 17.5354 11.8937 17.5354 11.6847 17.5688C11.1536 17.6536 10.6911 18.0305 9.76589 18.7844C8.35694 19.9325 7.65246 20.5066 7.15626 20.3712C6.97084 20.3206 6.80393 20.2176 6.67551 20.0746C6.33183 19.692 6.52866 18.8048 6.92234 17.0305L6.98902 16.7299C7.20322 15.7645 7.31033 15.2817 7.19827 14.8271C7.17737 14.7423 7.15093 14.6589 7.11913 14.5776C6.94866 14.1414 6.58291 13.8087 5.8514 13.1432L5.36912 12.7044C3.92408 11.3897 3.20155 10.7324 3.40973 10.1134C3.61791 9.49439 4.59082 9.40726 6.53663 9.23299L6.75157 9.21374C7.94049 9.10727 8.53494 9.05403 8.98779 8.71734C9.44064 8.38065 9.66284 7.82672 10.1072 6.71885L10.1439 6.62753Z"
            stroke="#97A3B6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>{repo.stars}</span>
      </span>

      <span>{formatDate(repo.updated)}</span>
    </div>
  </a>
);

export default RepoCard;
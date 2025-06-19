import React from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos, formatDate, children }) => (
  <section className="max-w-5xl mx-auto px-4 pb-10 mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 ">
    {repos.map(repo => (
      <RepoCard key={repo.name} repo={repo} formatDate={formatDate} />
    ))}
    {children}
  </section>
);

export default RepoList;
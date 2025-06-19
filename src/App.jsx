import React, { useState, useCallback, useEffect } from 'react';
import { github } from './api/github';
import Header from './components/Header';
import Profile from './components/Profile';
import RepoList from './components/RepoList';

// Debounce casero
function debounceFn(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default function App() {
  const [previewProfile, setPreviewProfile] = useState(null);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Nuevo estado para controlar si mostramos todos
  const [showAll, setShowAll] = useState(false);

  // Carga inicial del perfil 'github'
  useEffect(() => {
    fetchGitHubData('github');
  }, []);

  // Autocomplete preview con debounce
  const fetchPreview = useCallback(
    debounceFn(async username => {
      if (!username) {
        setPreviewProfile(null);
        return;
      }
      try {
        const res = await github.get(`/users/${username}`);
        setPreviewProfile(res.data);
      } catch {
        setPreviewProfile(null);
      }
    }, 300),
    []
  );

  // Búsqueda definitiva
  const fetchGitHubData = async username => {
    setLoading(true);
    setPreviewProfile(null);
    setError(null);
    // Reiniciar showAll cuando cambia de perfil
    setShowAll(false);
    try {
      /* comienza desde el mas reciente en adelante */
      /* const [userRes, reposRes] = await Promise.all([
        github.get(`/users/${username}`),
        github.get(`/users/${username}/repos`, { params: { sort: 'created', per_page: 100 } })
       ]); */
       /* comienza desde el mas antiguo en adelante */
      const [userRes, reposRes] = await Promise.all([
        github.get(`/users/${username}`),
        github.get(`/users/${username}/repos`, {
          params: { sort: 'created', direction: 'asc', per_page: 100 }
        })
      ]);

      setProfile(userRes.data);
      setRepos(
        reposRes.data.map(r => ({
          name: r.name,
          description: r.description || 'No description',
          stars: r.stargazers_count,
          forks: r.forks_count,
          updated: new Date(r.updated_at).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          html_url: r.html_url,
          license: r.license
        }))
      );
    } catch (err) {
      console.error(err);
      setProfile(null);
      setRepos([]);
      setError(err.response?.status === 404 ? 'User not found' : 'Error connecting to GitHub');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = dateStr => dateStr;

  // Solo los primeros 4 o todos
  const displayedRepos = showAll ? repos : repos.slice(0, 4);

  return (
    <div className="bg-[#21293a] min-h-screen">
      <Header
        onType={fetchPreview}
        onSearch={fetchGitHubData}
        previewProfile={previewProfile}
        onSelect={fetchGitHubData}
      />

      {/* Perfil siempre visible: carga 'github' al inicio */}
      {profile && <Profile profile={profile} formatDate={formatDate} />}


      {loading && <p className="text-center mt-6 text-white">Loading...</p>}
      {error && <p className="text-center mt-6 text-red-500">{error}</p>}

      {/* Lista de repos del perfil actual, con children para el botón */}
      {profile && (
        <RepoList repos={displayedRepos} formatDate={formatDate}>
          {!showAll && repos.length > 4 && (
            <div className="col-span-full text-center mt-4">
              <button
                onClick={() => setShowAll(true)}
                className=" text-gray-500 px-6 py-2 rounded-full hover:text-white transition cursor-pointer"
              >
                View All Repositories
              </button>
            </div>
          )}
        </RepoList>
      )}
    </div>
  );
}
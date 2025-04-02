import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/AryamanKochhar/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch GitHub repositories');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading GitHub repositories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="github-repos">
      <h2>My GitHub Repositories</h2>
      {repos.map(repo => (
        <div key={repo.id} className="repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description || 'No description available'}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

export default GitHubRepos;
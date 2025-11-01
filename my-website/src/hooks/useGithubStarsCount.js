import {useEffect, useState} from 'react';

/**
 * Fetch the star count for a GitHub repository.
 * Uses the GitHub API /repos/{owner}/{repo} endpoint.
 */
export function useGithubStarsCount({
  owner,
  repo,
  defaultValue = '0',
}) {
  const [value, setValue] = useState(String(defaultValue));
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchStarsCount() {
      setIsLoading(true);
      setError(null);
      try {
        const url = `https://api.github.com/repos/${owner}/${repo}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`GitHub API ${response.status}`);
        }

        const data = await response.json();
        if (data && typeof data.stargazers_count === 'number' && isMounted) {
          const starsCount = data.stargazers_count;
          if (Number.isFinite(starsCount)) {
            setCount(starsCount);
            setValue(String(starsCount));
          }
        }
      } catch (e) {
        if (isMounted) setError(e);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchStarsCount();
    return () => {
      isMounted = false;
    };
  }, [owner, repo, defaultValue]);

  return {value, count, isLoading, error};
}


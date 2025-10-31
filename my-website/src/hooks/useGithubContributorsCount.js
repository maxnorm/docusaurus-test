import {useEffect, useState} from 'react';

/**
 * Fetch the contributors count for a GitHub repository.
 * Uses the Link header trick with per_page=1 to infer total pages as count.
 */
export function useGithubContributorsCount({
  owner,
  repo,
  defaultValue = '0',
  includeAnonymous = true,
}) {
  const [value, setValue] = useState(String(defaultValue));
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchContributorsCount() {
      setIsLoading(true);
      setError(null);
      try {
        const url = new URL(
          `https://api.github.com/repos/${owner}/${repo}/contributors`
        );
        url.searchParams.set('per_page', '1');
        if (includeAnonymous) url.searchParams.set('anon', '1');

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(`GitHub API ${response.status}`);

        const linkHeader = response.headers.get('link');
        if (linkHeader) {
          const match = linkHeader.match(/&?page=(\d+)>;\s*rel="last"/);
          if (match && match[1]) {
            const inferredCount = Number(match[1]);
            if (Number.isFinite(inferredCount) && isMounted) {
              setCount(inferredCount);
              setValue(String(inferredCount));
              setIsLoading(false);
              return;
            }
          }
        }

        const data = await response.json();
        if (Array.isArray(data) && isMounted) {
          const fallbackCount = data.length;
          if (Number.isFinite(fallbackCount)) {
            setCount(fallbackCount);
            setValue(String(fallbackCount));
          }
        }
      } catch (e) {
        if (isMounted) setError(e);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchContributorsCount();
    return () => {
      isMounted = false;
    };
  }, [owner, repo, includeAnonymous, defaultValue]);

  return {value, count, isLoading, error};
}




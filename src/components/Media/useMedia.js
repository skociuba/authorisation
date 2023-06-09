import {useState, useEffect} from 'react';

export const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = setMatches(media.matches);
    media.addEventListener('change', () => {
      setMatches(media.matches);
    });

    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

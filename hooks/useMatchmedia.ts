import { useState, useEffect } from 'react';

const useMatchMedia = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 600px)');

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => removeEventListener('change', listener);
  }, [matches]);

  return matches;
};

export default useMatchMedia;

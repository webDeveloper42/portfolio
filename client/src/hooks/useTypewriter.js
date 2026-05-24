import { useState, useEffect } from 'react';

function useTypewriter(text, speed = 55) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    if (!text) return;

    let i = 0;
    const tick = () => {
      setDisplayed(text.slice(0, ++i));
      if (i < text.length) {
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };

    const id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [text, speed]);

  return { displayed, done };
}

export default useTypewriter;

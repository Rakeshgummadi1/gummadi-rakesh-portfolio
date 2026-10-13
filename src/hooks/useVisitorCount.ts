import { useEffect, useState } from 'react';

const COUNTER_API = 'https://countapi.mileshilliard.com/api/v1';
const COUNTER_KEY = 'rakesh-gummadi-portfolio-site-visits';
const COUNTED_FLAG = 'rg-portfolio-visit-counted';

let request: Promise<number | null> | null = null;

function readFlag() {
  try {
    return localStorage.getItem(COUNTED_FLAG) === '1';
  } catch {
    return false;
  }
}

function writeFlag() {
  try {
    localStorage.setItem(COUNTED_FLAG, '1');
  } catch {
    // Storage blocked (private mode); this browser may be counted again next visit.
  }
}

// Shared across mounts so StrictMode's double effect run can't register two hits.
function loadVisitorCount() {
  if (!request) {
    const counted = readFlag();
    request = fetch(`${COUNTER_API}/${counted ? 'get' : 'hit'}/${COUNTER_KEY}`, {
      referrerPolicy: 'strict-origin-when-cross-origin',
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { value?: number | string } | null) => {
        const value = Number(data?.value);
        if (!Number.isFinite(value)) return null;
        if (!counted) writeFlag();
        return value;
      })
      .catch(() => null);
  }
  return request;
}

/** Live site visitor total; each browser is counted once. `null` while loading or if the API is unreachable. */
export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    loadVisitorCount().then((value) => {
      if (active) setCount(value);
    });
    return () => {
      active = false;
    };
  }, []);

  return count;
}

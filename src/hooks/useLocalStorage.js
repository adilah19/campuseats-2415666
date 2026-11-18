import { useCallback, useEffect, useState } from 'react'

function read(key, initialValue, persist) {
  if (!persist) return initialValue // guests: fixed default, never read
  try {
    const saved = localStorage.getItem(key)
    return saved !== null ? JSON.parse(saved) : initialValue
  } catch {
    return initialValue // broken saved data: start fresh
  }
}

// Like useState, but saved in localStorage per key.
// persist=false -> behaves like plain useState (for guests).
export function useLocalStorage(key, initialValue, persist = true) {
  const [state, setState] = useState(() => ({
    key,
    value: read(key, initialValue, persist),
  }))

  // Key changed (login/logout/switch user): load that key's value right away
  let current = state
  if (state.key !== key) {
    current = { key, value: read(key, initialValue, persist) }
    setState(current)
  }

  useEffect(() => {
    if (!persist) return
    try {
      localStorage.setItem(key, JSON.stringify(current.value))
    } catch {
      // storage full or blocked: keep working in memory
    }
  }, [key, persist, current.value])

  const setValue = useCallback(
    (next) =>
      setState((prev) => ({
        key,
        value: typeof next === 'function' ? next(prev.value) : next,
      })),
    [key]
  )

  return [current.value, setValue]
}
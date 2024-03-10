export const createContext = <T>(initialState: T): { getState: () => T; setState: (newState: T) => void } => {
  let state = initialState;

  const getState = (): T => state;

  function setState(newState: T): void {
    state = newState;
  }

  return { getState, setState };
};

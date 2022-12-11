import { useRef, useState, useEffect, RefObject, useMemo } from 'react';

type ReturnData<T> = {
  ref: RefObject<T>;
  isChild: boolean;
};

const useIsChild = <T extends HTMLElement>(className: string) => {
  const ref = useRef<T>(null);
  const [isChild, setIsChild] = useState(false);

  useEffect(() => {
    if (ref.current?.closest(`.${className}`)) {
      setIsChild(true);
    }
  }, []);

  return {
    ref,
    isChild,
  } as ReturnData<T>;
};

export default useIsChild;

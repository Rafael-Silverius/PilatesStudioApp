import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCaputring = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler("");
      }

      document.addEventListener("click", handleClick, listenCaputring);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCaputring]
  );
  return ref;
}

import { RefObject, useEffect } from "react";

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>,
  handlerCallback: (event: Event) => void) => {
    useEffect(() => {
      const listener = (event: Event) => {
        if (ref.current && ref.current.contains(event?.target as Node)) {
          handlerCallback(event)
        }
      }

      document.addEventListener('click', listener)

      return () => {
        document.removeEventListener('click', listener)
      }
    }, [ref, handlerCallback])
}

export default useOutsideClick

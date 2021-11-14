import { useEffect, useRef } from "react";

const createRootElement = (id) => {
  const container = document.createElement('div');
  container.setAttribute('id', id);
  return container;
};

const addRootElement = (element) => {
  document.body.insertBefore(
    element,
    document.body.lastElementChild.nextElementSibling,
  );
}

export const usePortal = (id) => {
  const ref = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parent = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parent)
    }

    parent.appendChild(ref.current)

    return () => {
      ref.current.remove();
      if (!parent.childElementCount) {
        parent.remove();
      }
    };
  }, [id])

  const getRoot = () => {
    if (!ref.current) {
      ref.current = document.createElement(`div`);
    }
    return ref.current;
  }
  return getRoot()
}




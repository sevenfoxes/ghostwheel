import { useEffect, useRef } from "react";

const createRootElement = (id: string) => {
  const container = document.createElement('div');
  container.setAttribute('id', id);
  return container;
};

const addParentElement = (element: HTMLElement) => {
  document.body.insertBefore(
    element,
    document.body.lastElementChild.nextElementSibling,
  );
}

export const usePortal = (id: string) => {
  const ref = useRef(null);

  useEffect(() => {
    const existingParent: HTMLElement = document.querySelector(`#${id}`);
    const parent = existingParent ? existingParent : createRootElement(id);

    if (!existingParent) {
      addParentElement(parent);
    }

    if (!ref.current) {
      ref.current = parent;
    }

    parent.appendChild(ref.current)

    return (): void => {
      ref.current.remove();
      if (!parent.childElementCount) {
        parent.remove();
      }
    };
  }, [id])
}




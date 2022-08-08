import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { clientsSelector } from './clientState';


export const useClients = () => {
  const [{ clients }, setClients] = useRecoilState(clientsSelector);

  // useEffect(() => {
  //   if (!clients?.length) {

  //     setClients()
  //   }
  // }, [clients]);

  return clients;
}

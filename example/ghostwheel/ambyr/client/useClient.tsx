import { useRecoilValue } from 'recoil';
import { clientSelector } from './clientState';


export const useClient = (id: number) => {
  const { client } = useRecoilValue(clientSelector(id));

  if(!client) {
    return null;
  }

  return client || {} as Client;
}

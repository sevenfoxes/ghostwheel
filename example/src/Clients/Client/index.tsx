import { useClient } from '../../../ghostwheel';


export type ClientRender = {
  id: number;
}



export const Client = ({ id = 0 }) => {
  const client = useClient(id);

  console.log(client)
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

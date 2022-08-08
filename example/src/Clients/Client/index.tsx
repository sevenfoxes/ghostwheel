import { useClient } from '../../../ghostwheel';
import styled from '@emotion/styled';

export type ClientRender = {
  id: number;
}

export interface LinkProps {
  path: string;
  title: string;
}

const Root = styled.div`
  font-size: 10px;
  border: 1px solid #ccc;
  & + & {
    margin-top: 1rem;
  }
`

const Meta = styled.header`
  font-size: 10px;
  border-bottom: 1px solid #ccc;
  padding: .5rem;
`

const Container = styled.div`
  padding: .5rem;
`

const Label = styled.span`
  padding: .5rem;
  &:after {
    content: ':'
  }
`

export const Client = ({ id: clientId = 0 }) => {
  const client = useClient(clientId);

  if (!client) {
    return null;
  }

  console.log(client);
  return (
    <Root>
      <Meta>
        {client.id} - {client.username}
      </Meta>
      <Container>
        <div>
          <Label>
            name
          </Label>
          {client.name}
        </div>
        <div>
          <Label>
            email
          </Label>
          {client.email}
        </div>
      </Container>
    </Root>
  )
}

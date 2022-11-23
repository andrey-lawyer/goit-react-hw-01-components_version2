import styled from 'styled-components';
export const FriendListUser = styled.ul`
 margin: 0 auto;
  margin-top: ${props => props.theme.spacing(5)};
  margin-bottom: ${props => props.theme.spacing(5)};
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

`;
import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
  0px 1px 1px rgba(0, 0, 0, 0.12);
  padding: ${props => props.theme.spacing(1)};
  border-radius: 2%;
`;

export const Status = styled.span`
  display: block;
  width: ${props => props.theme.spacing(4)};
  height: ${props => props.theme.spacing(4)};
  border-radius: 50%;

  background-color: ${({isOnline, theme}) => {
      return isOnline?  theme.colors.green:  theme.colors.red; 
  }};
`;
export const AvatarUser = styled.img`
`;
export const NameUser = styled.p`
`;
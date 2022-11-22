import styled from 'styled-components';

 export const ProfileUser = styled.div`
  width: 207px;
  margin: 0 auto;
  padding-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
`;
export const DescriptionUser = styled.div`
text-align: center;
`;
export const ImgUser = styled.img`
  display: inline-block;
  width: 48px;
  border: solid 1px ${props => props.theme.colors.black};
  border-radius: 50%;
  padding: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.aqua};
  margin-bottom: ${props => props.theme.spacing(2)};
  `;

  export const NameUser = styled.p`
  font-size: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(2)};
  `;

  export const TagUser = styled.p`
  font-size: ${props => props.theme.spacing(3)}; 
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.gray}
  `;

  export const LocationUser = styled.p`
  font-size: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(2)}; 
  color: ${props => props.theme.colors.gray}
  `;

  export const StatsListUser = styled.ul`
  display: flex;
  `;

  export const StatsItemtUser = styled.li`
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-top: ${props => props.theme.spacing(2)};
  margin: 0;
  text-align: center;
  outline: solid 1px ${props => props.theme.colors.secondary};
  width: 70px;
  `;
   export const StatsLabelUser = styled.span`
   display: block;
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.gray};
  `;
  export const StatsquantityUser = styled.span`
   display: block;
   font-size: ${props => props.theme.spacing(3)};
  `;
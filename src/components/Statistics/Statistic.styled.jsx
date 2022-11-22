import styled from 'styled-components';

export const SectionStat = styled.section`
  margin: 0 auto;
  width: 300px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
  0px 1px 1px rgba(0, 0, 0, 0.12); 
`;

export const TitleStat = styled.h2`
  text-align: center;
  padding-top: ${props => props.theme.spacing(5)};
  margin-bottom: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.grey};
`;

export const ListStat = styled.ul`
  display: flex;
`;

export const ItemStat = styled.li`
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-top: ${props => props.theme.spacing(2)};
  margin: 0;
  text-align: center;
  width: 70px;
`;

export const LabelStat = styled.span`
  display: block;
  font-size: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const PersentageStat = styled.span`
`;

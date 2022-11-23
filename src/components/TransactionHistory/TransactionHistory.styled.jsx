import styled from 'styled-components';

 export const TableHistory = styled.table`
 display: block;
  margin: 0 auto;
  width: 300px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
  0px 1px 1px rgba(0, 0, 0, 0.12);
  border-collapse: collapse;
`;

export const TitleLines = styled.tr`
  background-color: ${props => props.theme.colors.backgroundTitleTable};
  color: ${props => props.theme.colors.white};
  `;

  export const TitleSells = styled.th`
 outline: solid 1px ${props => props.theme.colors.outlineTable};
  `;

   export const LinesColumns = styled.tbody`
  `;

export const Sells = styled.td`
  outline: solid 1px ${props => props.theme.colors.SellsTable};
  margin: 0;
  width: 100px;
  text-align: center;
  `;

  export const Lines = styled.tr`
   background-color: ${({index, theme}) => {
      return index === 0?  theme.colors.lineGreyTable:  theme.colors.white; 
  }};
  `;
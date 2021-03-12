import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 2px;
  padding: 15px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.40);
  background-color: #343746;
`;

export const Tipo = styled.View`
  flex-direction: row;

`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#C62C36' : '#049301'};
  padding-bottom: 3px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 7px;
`;

export const TipoText = styled.Text`  
  color: #FFFFFF;
  font-size: 16px;
  font-style: italic;
`;

export const ValorText = styled.Text`
  color: #f3f3f3;
  font-size: 22px;
  font-weight: bold;
`;
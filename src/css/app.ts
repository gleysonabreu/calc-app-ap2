import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  background: #d2d2d2;
  padding: 20px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font: Arial;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (min-width: 1100px) {
    max-width: 800px;
    max-height: 600px;
  }
`;

export const Calculator = styled.div`
  width: 100%;
  @media (min-width: 1100px) {
    max-width: 400px;
  }
  
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;

export const CalcValue = styled.div`
  width: 100%;
  min-height: 36px;
  padding: 5px;
  font-size: 22px;
  color: #fff;

  display: flex;

  background: #333;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  span{
    text-align: right;
    width: 100%;
  }
`;

export const ComponentsCalc = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "soma subtracao divisao multiplicacao";
  

  button:nth-child(0){
    grid-area: soma;
  }
  button:nth-child(1){
    grid-area: subtracao;
  }

  button:nth-child(2){
    grid-area: divisao;
  }

  button:nth-child(3){
    grid-area: multiplicacao;
  }
`;

export const Button = styled.button`
  border-radius: 0px;
  border: 0;
  padding: 10px;
  outline: none;
  background-color: #DEBA6F;
  font-size: 19px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover{
    background-color: #E5C88B;
  }
`;

export const NumbersCalc = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;

export const ButtonsNumber = styled(Button)`
  background: #b5b5b5;

  &:nth-child(9){
    border-bottom-left-radius: 16px;
  }
  &:hover{
    background-color: #cecece;
  }
`;

export const ButtonEqual = styled(Button)`
  width: 100%;

  border-bottom-right-radius: 16px;
`;
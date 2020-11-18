import React, { useState } from 'react';
import {
  Container, Wrapper, Calculator,
  CalcValue, ComponentsCalc, Button,
  NumbersCalc, Numbers, ButtonsNumber, ButtonEqual
} from './css/app';

function App() {

  const [infoScreen, setInfoScreen] = useState('');

  const [operator, setOperator] = useState('');
  const [calc, setCalc] = useState<number>();

  function addOperator(op: string){
    setOperator(op);
    setInfoScreen('');
  }

  function addNumbersAndOperator(info: string){
    setInfoScreen(infoScreen + info);
  }

  function result(){
    console.log(infoScreen);
    const number = parseFloat(parseFloat(infoScreen).toFixed(2));
    calculator(operator, number);
    setInfoScreen(String(calc));
  }

  function calculator(op: string, number: number){
    switch(op){
      case '+':
        setCalc(calc + number);
        break;
      case '-':
        setCalc(calc - number);
        break;
      case '*':
        setCalc(calc * number);
        break;
      case '/':
        setCalc(calc / number);
        break;
    }
  }
  
  
  return (
    <Container>
      <Wrapper>
        <Calculator>
          <CalcValue><span>{infoScreen}</span></CalcValue>
          <ComponentsCalc>
            <Button onClick={() => addOperator('+')}>+</Button>
            <Button onClick={() => addOperator('-')}>-</Button>
            <Button onClick={() => addOperator('/')}>/</Button>
            <Button onClick={() => addOperator('*')}>*</Button>
          </ComponentsCalc>
          <NumbersCalc>
            <Numbers>
              <ButtonsNumber onClick={() => addNumbersAndOperator('9')}>9</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('8')}>8</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('7')}>7</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('6')}>6</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('5')}>5</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('4')}>4</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('3')}>3</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('2')}>2</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('1')}>1</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('0')}>0</ButtonsNumber>
              <ButtonsNumber onClick={() => addNumbersAndOperator('.')}>.</ButtonsNumber>
              <ButtonsNumber>C</ButtonsNumber>
            </Numbers>
            <ButtonEqual onClick={result}>=</ButtonEqual>
          </NumbersCalc>
        </Calculator>
      </Wrapper>
    </Container>
  );
}

export default App;

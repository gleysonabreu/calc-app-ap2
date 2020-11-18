import React, { useState } from 'react';
import {
  Container, Wrapper, Calculator,
  CalcValue, ComponentsCalc, Button,
  NumbersCalc, Numbers, ButtonsNumber, ButtonEqual
} from './css/app';

function App() {

  const [infoScreen, setInfoScreen] = useState('');

  function addValue(value: string) {
    setInfoScreen(infoScreen + value);
  }

  function reset() {
    setInfoScreen('');
  }

  function calc(){
    try {
      if(infoScreen === 'Error') {
        reset();
        return;
      }


      const result = eval(infoScreen);
      setInfoScreen(result);      
    } catch (error) {
      setInfoScreen('Error');
    }
  }

  
  return (
    <Container>
      <Wrapper>
        <h1>Calculadora</h1>
        <Calculator>
          <CalcValue><span>{infoScreen}</span></CalcValue>
          <ComponentsCalc>
            <Button onClick={() => addValue('+')}>+</Button>
            <Button onClick={() => addValue('-')}>-</Button>
            <Button onClick={() => addValue('/')}>/</Button>
            <Button onClick={() => addValue('*')}>*</Button>
          </ComponentsCalc>
          <NumbersCalc>
            <Numbers>
              <ButtonsNumber onClick={() => addValue('9')}>9</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('8')}>8</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('7')}>7</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('6')}>6</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('5')}>5</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('4')}>4</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('3')}>3</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('2')}>2</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('1')}>1</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('0')}>0</ButtonsNumber>
              <ButtonsNumber onClick={() => addValue('.')}>.</ButtonsNumber>
              <ButtonsNumber onClick={reset}>C</ButtonsNumber>
            </Numbers>
            <ButtonEqual onClick={calc}>=</ButtonEqual>
          </NumbersCalc>
        </Calculator>
      </Wrapper>
    </Container>
  );
}

export default App;

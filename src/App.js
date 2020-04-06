import React, { Component } from 'react';
import { Container, Form, SubmitButton, Result, Body } from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Evitar que a pagina recarregue.
  handleSubmit(e) {
    e.preventDefault();
  }


  calculate() {
    var binary = []
    binary = document.getElementById('n1').value;
    
    // converte de binario para decimal
    var potency = 0;
    var denary = 0;
    
    for(var i = binary.length - 1; i >=0; i --){
     
      denary +=  Math.pow(2, potency) * binary[i];
     
      if(binary[i] != 1 && binary[i] != 0){ 
        
        alert('The number is not binary')
        document.getElementById('n1').value = '';
        document.getElementById('resultado').innerHTML = '';
        return;  
      }

      potency++;
    } 

    document.getElementById('resultado').innerHTML = denary;
    document.getElementById('n1').value = '';
  }

  render() {
    return(
      <Container>
        <h1>Binary Converter</h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            maxlength="8" 
            onBlur={this.calculate} 
            id="n1"
          />
          <SubmitButton size={14} type="submit"> convert</SubmitButton>
        </Form>
        <Result id="resultado" />
      </Container>
    );
  }
}
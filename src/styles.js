import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body{
    background: #111417;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, botton {
    color: black;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1{
    font-size: 30px;
    text-align: center;
    color: black;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  
  background: black;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6
    }
  `;

export const Result = styled.ul`
  list-style: none;
  margin-top: 30px;
  font-size: 200px;
  text-align: center;
  color: black;
`;


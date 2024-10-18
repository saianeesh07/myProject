import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh; 
  justify-content: center;
  padding: 20px;
  overflow: hidden;
`;

const Heading = styled.h1`
  font-size: 50px;
  color: #bb86fc;
  margin-bottom: 20px;
  text-align: center;
  font-weight:700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%; 
  max-width: 400px; 
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #2e2e2e;
  color: #e0e0e0;

  &:focus {
    outline: none;
    border-color: #6200ea;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #6200ea;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight:600;

  &:hover {
    background-color: #3700b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 40px;
  color: #bb86fc;
`;

const ClearButton = styled(Button)`
  background-color: #03dac6;
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  width:25%;
  font-weight:600;

  &:hover {
    background-color: red;
  }
`;

function InputForm() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInputs = () => {
    setInputValue("");
    setResult("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/', { inputString: inputValue });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormContainer>
      <Heading>Prefix Evaluator</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a prefix expression"
        />
        <Button type="submit">Submit</Button>
      </Form>
      {result && <Result>Result: {result}</Result>}
      {result && <ClearButton onClick={clearInputs}>Clear</ClearButton>}
    </FormContainer>
  );
}

export default InputForm;

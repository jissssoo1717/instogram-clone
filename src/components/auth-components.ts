import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;
export const Div1 = styled.div`
  width: 350px;
  //height: 397px;
  border: 1px solid #dbdbdb;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  color: #262626;
  font-family: "Lobster", sans-serif;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem 0 3rem;
`;
export const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const Input = styled.input`
  width: 100%;
  height: 37px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  background-color: #fafafa;
  margin-bottom: 6px;
  padding: 0 5px;
`;
export const Button = styled.button`
  width: 100%;
  height: 37px;
  border: none;
  border-radius: 4px;
  background-color: #4bb2f2;
  color: white;
  font-weight: bold;
  margin: 10px 0;
`;
export const Switcher = styled.span`
  margin: 10px 0;
  font-size: 0.8rem;
  color: #262626;
  a {
    text-decoration: none;
    color: #3333cc;
  }
`;

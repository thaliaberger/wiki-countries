import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12%;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  p {
    font-weight: 600;
    margin-left: 15px;
    margin-top: 3px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 5%;
    h1 {
      font-size: 15px;
    }
  }
`;

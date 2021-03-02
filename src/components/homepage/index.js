import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  section {
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(4, 230px);
    gap: 40px 10px;
  }

  section a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  @media screen and (max-width: 1000px) {
    section {
      grid-template-columns: repeat(3, 230px);
    }
  }
  @media screen and (max-width: 720px) {
    section {
      grid-template-columns: repeat(2, 50%);
    }
  }
  @media screen and (max-width: 500px) {
    section {
      grid-template-columns: repeat(1, 100%);
    }
  }
`;

export const InputContainer = styled.div`
  margin: 50px auto 0;
  width: 950px;
  display: flex;
  justify-content: space-between;

  .text-input-div {
    height: 100%;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 11px 0 11px 15px;
    display: flex;
    align-items: center;
  }

  input {
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.text};
    width: 250px;
    padding-left: 10px;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .select-input-div {
    position: relative;
  }

  select {
    height: 100%;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    padding: 11px 80px 11px 20px;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .arrow {
    position: absolute;
    right: 10px;
    top: 11px;
  }

  select:focus {
    outline: none;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 710px;
    select {
      margin-top: 10px;
      width: 100%;
    }
    .arrow {
      top: 20px;
    }
  }
  @media screen and (max-width: 720px) {
    width: 95%;
    align-items: stretch;

    select {
      margin-top: 10px;
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const CountryContainer = styled.div`
  width: 230px;
  height: 350px;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  :hover {
    background: ${(props) => props.theme.colors.background};
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h2 {
    font-weight: 800;
    font-size: 16px;
  }
  strong {
    font-weight: 600;
  }
  p {
    font-weight: 300;
    margin: 15px 0;
  }

  div {
    padding: 20px;
  }
  @media screen and (max-width: 720px) {
    width: 90%;
    img {
      height: 200px;
    }
  }
`;

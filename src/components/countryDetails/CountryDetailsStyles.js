import styled from "styled-components";

export const CountryDetailsContainer = styled.section`
  margin: 3% 12%;
  font-size: 16px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 800;
  }

  strong {
    font-weight: 600;
  }

  .go-back {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin: 3% 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CountryDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0 auto;

  > div {
    width: 550px;
  }

  > div h2 {
    margin-bottom: 30px;
    font-size: 26px;
  }

  > div p {
    margin: 10px 0;
  }

  .country-details-columns {
    display: flex;
  }

  .country-details-columns > div + div {
    margin-left: 50px;
  }

  img {
    max-width: 400px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    border: 1.5px solid ${(props) => props.theme.colors.text};
    font-weight: 600;
    padding: 2px 10px;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .country-borders-div span {
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;
    margin-left: 10px;
  }

  .country-borders-div p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    max-width: 50%;

    > div h2 {
      margin: 20px 0;
    }

    .country-details-columns {
      flex-direction: column;
    }

    .country-details-columns > div + div {
      margin-left: 0;
    }

    .country-borders-div p {
      flex-direction: column;
    }

    .country-borders-div span {
      margin: 10px 0 0 0;
    }

    a {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
    > div {
      margin-left: 20px;
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { IoIosArrowRoundBack } from "react-icons/io";

import { CountryDetailsContainer, CountryDetailsDiv } from "./index";

function CountryDetails(props) {
  const [state, setState] = useState({});
  const [currentBorder, setCurrentBorder] = useState("");
  const [borders, setBorders] = useState([]);
  const [bordersLoaded, setBordersLoaded] = useState([]);
  const [bordersLength, setBordersLength] = useState(0);

  //Buscar os dados do país

  useEffect(() => {
    async function fetchData() {
      try {
        const name = props.match.params.name;

        const response = await axios.get(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        );
        setState({ ...response.data[0] });
      } catch (err) {}
    }
    fetchData();
  }, [props]);

  //Buscar o nome de cada borda

  useEffect(() => {
    async function fetchData(countryCode) {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${countryCode}`
        );
        setCurrentBorder(response.data.name);
        setBordersLength(state.borders.length);
      } catch (err) {}
    }
    if (state.borders) {
      state.borders.forEach((country) => {
        fetchData(country);
      });
    }
  }, [state]);

  //Criar array com os nomes das bordas

  useEffect(() => {
    if (currentBorder !== "" && borders.length < bordersLength) {
      borders.push(currentBorder);
      setBorders(borders);
    }
    if (borders.length === bordersLength) {
      setBordersLoaded(borders);
    }
  }, [currentBorder]);

  //Limpar state das bordas quando clicar em outro país

  function handleClick() {
    setBorders([]);
    setBordersLoaded([]);
  }

  return (
    <CountryDetailsContainer>
      <Link className="go-back" to="/">
        <IoIosArrowRoundBack size={32} /> Back
      </Link>
      {state ? (
        <CountryDetailsDiv>
          <img src={state.flag} alt="country flag" />
          <div>
            <h2>{state.name}</h2>
            <div className="country-details-columns">
              <div>
                <p>
                  <strong>Native Name: </strong>
                  {state.nativeName}
                </p>
                {state.population ? (
                  <p>
                    <strong>Population: </strong>
                    {state.population.toLocaleString("pt-BR")}
                  </p>
                ) : (
                  <></>
                )}
                <p>
                  <strong>Region: </strong>
                  {state.region}
                </p>
                <p>
                  <strong>Sub region: </strong>
                  {state.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {state.capital}
                </p>
              </div>
              <div>
                {state.topLevelDomain ? (
                  <p>
                    <strong>Top Level Domain: </strong>
                    {state.topLevelDomain[0]}
                  </p>
                ) : (
                  <></>
                )}

                {state.currencies ? (
                  <p>
                    <strong>Currencies: </strong>
                    {state.currencies.map((item) => item.name)}
                  </p>
                ) : (
                  <></>
                )}

                {state.languages ? (
                  <p>
                    <strong>Languages: </strong>
                    {state.languages.map((item, idx) =>
                      idx + 1 === state.languages.length
                        ? item.name
                        : item.name + ", "
                    )}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="country-borders-div">
              {bordersLoaded ? (
                <p>
                  <strong>Borders Countries: </strong>
                  <span>
                    {bordersLoaded.slice(0, bordersLength).map((item) => (
                      <Link onClick={handleClick} to={item}>
                        {item}
                      </Link>
                    ))}
                  </span>
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </CountryDetailsDiv>
      ) : (
        <></>
      )}
    </CountryDetailsContainer>
  );
}

export default CountryDetails;

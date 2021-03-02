import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { IoIosArrowRoundBack } from "react-icons/io";

import {
  CountryDetailsContainer,
  CountryDetailsDiv,
} from "./CountryDetailsStyles";

function CountryDetails(props) {
  const [state, setState] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const id = props.match.params.id;

        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${id}`
        );

        setState({ ...response.data });
      } catch (err) {}
    }
    fetchData();
  }, [props]);

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
              {state.borders ? (
                <p>
                  <strong>Borders Countries: </strong>
                  <span>
                    {state.borders.map((item) => (
                      <Link to={item}>{item}</Link>
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

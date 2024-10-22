import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, InputContainer, CountryContainer } from "./index";

import { IoIosSearch } from "react-icons/io";
import { HiOutlineChevronDown } from "react-icons/hi";

function Homepage() {
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        setAllCountries([...response.data]);
        setCurrentCountries([...response.data]);
      } catch (err) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (input !== "") {
        try {
          const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${input}`
          );

          setCurrentCountries([...response.data]);
        } catch (err) {}
      } else {
        setCurrentCountries(allCountries);
      }
    }
    fetchData();
  }, [input]);

  useEffect(() => {
    async function fetchData() {
      if (select !== "") {
        try {
          const response = await axios.get(
            `https://restcountries.eu/rest/v2/region/${select}`
          );
          setCurrentCountries([...response.data]);
        } catch (err) {}
      } else {
        setCurrentCountries(allCountries);
      }
    }
    fetchData();
  }, [select]);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleSelect(event) {
    setSelect(event.target.value);
  }

  return (
    <Container>
      <InputContainer>
        <div className="text-input-div">
          <IoIosSearch size={20} />
          <input
            type="text"
            onChange={handleInput}
            placeholder="Search for a country..."
          />
        </div>
        <div className="select-input-div">
          <select onChange={handleSelect} name="regions" id="regions">
            <option value="" selected>
              Filter by Region...
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <HiOutlineChevronDown className="arrow" size={20} />
        </div>
      </InputContainer>
      <section>
        {currentCountries
          ? currentCountries.map((country) => (
              <Link key={country.alpha3Code} to={country.name}>
                <CountryContainer>
                  <img src={country.flag} alt="country flag" />
                  <div>
                    <h2>{country.name}</h2>
                    <p>
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString("pt-BR")}
                    </p>
                    <p>
                      <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                      <strong>Capital:</strong> {country.capital}
                    </p>
                  </div>
                </CountryContainer>
              </Link>
            ))
          : null}
      </section>
    </Container>
  );
}

export default Homepage;

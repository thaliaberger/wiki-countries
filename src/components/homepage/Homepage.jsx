import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, InputContainer, CountryContainer } from "./HomepageStyles";

import { IoIosSearch } from "react-icons/io";

function Homepage() {
  const [allCountries, setAllCountries] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        setAllCountries([...response.data]);
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

          setAllCountries([...response.data]);
        } catch (err) {}
      } else {
        try {
          const response = await axios.get(
            "https://restcountries.eu/rest/v2/all"
          );

          setAllCountries([...response.data]);
        } catch (err) {}
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
          setAllCountries([...response.data]);
        } catch (err) {}
      } else {
        try {
          const response = await axios.get(
            "https://restcountries.eu/rest/v2/all"
          );

          setAllCountries([...response.data]);
        } catch (err) {}
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
        <div>
          <IoIosSearch size={20} />
          <input
            type="text"
            onChange={handleInput}
            placeholder="Search for a country..."
          />
        </div>
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
      </InputContainer>
      <section>
        {allCountries
          ? allCountries.map((country) => (
              <Link key={country.alpha3Code} to={country.alpha3Code}>
                <CountryContainer>
                  <img src={country.flag} alt="country flag" />
                  <div>
                    <h2>{country.name}</h2>
                    <p>
                      <strong>Population:</strong> {country.population}
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

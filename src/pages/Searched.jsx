import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../api/Api";
import { Link } from "react-router-dom";

export const Searched = () => {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipe.map((item) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 4rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1 rem;
  }
`;

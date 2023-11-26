import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { API_KEY } from "../api/Api";
import { Link } from "react-router-dom";

export const Popular = () => {
  const perPage = window.innerWidth <= 768 ? 1 : 3;
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular"); //get item from local storage
    if (check) {
      setPopular(JSON.parse(check)); //change stored string to array
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes)); //pass item to string in local storage
      setPopular(data.recipes);
      console.log(data.recipes);
    }
    console.log(popular);
  };
  return (
    <Wrapper>
      <h3>Popular products</h3>
      <Splide
        options={{
          perPage: perPage,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipe/" + recipe.id}>
                <p key={recipe.id}>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.image} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 8;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

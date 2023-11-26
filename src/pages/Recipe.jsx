import React, { startTransition } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../api/Api";
import { motion } from "framer-motion";

export const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const getDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };
  useEffect(() => {
    getDetails(params.name);
  }, [params.name]);
  console.log(details);

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonWrapper>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Intruction
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonWrapper>
        <DescriptionWrapper>
          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <h4
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h4>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </DescriptionWrapper>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled(motion.div)`
  display: flex;

  gap: 2vw;
  img {
    width: 25rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    img {
      width: 22rem;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background: white;
  cursor: pointer;
  &.active {
    color: white;
    background: #45474b;
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 5px;
    margin-left: -11px;
  }
  ul {
    font-weight: 500;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    padding: 2px 4px;
  }
`;

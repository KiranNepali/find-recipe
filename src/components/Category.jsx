import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

export const Category = () => {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  gap: 1rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 4rem;
  height: 4rem;
  padding: 2px;
  background: gray;
  border-radius: 50%;
  background: #45474b;
  h4 {
    font-size: 0.6rem;
    color: white;
  }
  svg {
    color: white;
    font-size: 1rem;
  }

  &.active{
    background: #F05941;
    svg {
      color: white;
    }
    h4 {  
      color: white;
    }

`;

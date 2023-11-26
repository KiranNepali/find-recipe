import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [input, setInput] = useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <Nav>
      <Link to="/">
        <h2>Find Recipe</h2>
      </Link>
      <FormStyle onSubmit={submitHandler}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <span onClick={submitHandler}>
          <FaSearch />
        </span>
      </FormStyle>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FormStyle = styled.form`
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1px 2rem;
  align-items: center;
  border-radius: 2rem;
  background: #45474b;
  width: 20rem;

  input {
    color: white;
    background: #45474b;
    height: full;
    outline: none;
    border: none;
    width: 12rem;
    padding: 5px 0;
  }
  @media (max-width: 768px) {
    input {
      width: 50%;
    }
  }
  span {
    cursor: pointer;
  }
`;

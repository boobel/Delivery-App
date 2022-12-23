import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import banner from "../assets/images/banner.jpg";

const Home: React.FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledBanner>
        <StyledBackdrop>
          <StyledMotto>
            <span>All your favorite foods</span>
            <span>All here</span>
            <span>All for your convenience</span>
          </StyledMotto>
          <Link to="/shop">
            <StyledOrderBtn>Order Now</StyledOrderBtn>
          </Link>
        </StyledBackdrop>
      </StyledBanner>
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const StyledBanner = styled.div`
  background-image: url(${banner});
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBackdrop = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const StyledMotto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 200%;
  font-weight: 700;
`;

const StyledOrderBtn = styled.button`
  background-color: #ff8e20;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
`;

export { Home };

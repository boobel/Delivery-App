import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import banner from "../images/banner.jpg";

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

const Home: React.FC = () => {
  useEffect(() => {
    /* //TODO JAKI ZWRACAĆ TYP W PROMISE */
    const fetchMeals = async (): Promise<undefined> => {
      try {
        const data = await fetch("http://localhost:3000/meals");
        const meals = await data.json();
        console.log(meals);
        return meals;
      } catch (e) {
        console.error(e);
      }
    };

    void fetchMeals();
  }, []);

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
          <StyledOrderBtn>Order Now</StyledOrderBtn>
        </StyledBackdrop>
      </StyledBanner>
      <Footer />
    </StyledWrapper>
  );
};

export { Home };

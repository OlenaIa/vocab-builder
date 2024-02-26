import styled from "styled-components";

export const Section = styled.section`
  /* margin: 0 auto; */
  /* width: 100%; */
  /* height: 100vh; */
`;

export const Container = styled.div`
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;  
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;

  @media screen and (min-width: 375px) {
        width: 375px;
    }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
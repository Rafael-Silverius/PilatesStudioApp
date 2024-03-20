import { useState } from "react";
import styled from "styled-components";

const CarouselBox = styled.div`
  max-width: 700px;
  height: 400px;
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-100);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  border-radius: var(--border-radius-md);
  position: relative;
`;
const StyledImg = styled.img`
  width: 95%;
  height: 95%;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  filter: drop-shadow(0 0 0.2rem black);
`;

const BottomDiv = styled.div`
  position: absolute;
  color: var(--color-grey-300);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  bottom: 7%;
`;
const StyledButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledRoundBtn = styled.button`
  width: 9px;
  height: 9px;
  border: none;
  background-color: var(--color-grey-300);
  border-radius: 50%;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: var(--color-grey-0);
    transform: scale(1.5);
  }
`;

const Carousel = ({ images, text }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CarouselBox>
      <StyledImg
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <BottomDiv>
        <h2>{text[activeIndex]}</h2>
        <StyledButtons>
          <StyledRoundBtn onClick={() => setActiveIndex(0)}></StyledRoundBtn>
          <StyledRoundBtn onClick={() => setActiveIndex(1)}></StyledRoundBtn>
          <StyledRoundBtn onClick={() => setActiveIndex(2)}></StyledRoundBtn>
        </StyledButtons>
      </BottomDiv>
    </CarouselBox>
  );
};
export default Carousel;

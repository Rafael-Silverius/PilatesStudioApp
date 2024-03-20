import styled from "styled-components";
import Carousel from "../ui/Carousel";

const StyledHeader = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 6rem 0;
  @media only screen and (max-width: 900px) {
    margin: 4rem 0;
  }
`;

export default function HomeScreen() {
  const images = [
    "../../public/img/pose.jpg",
    "../../public/img/mats.jpg",
    "../../public/img/price.jpg",
  ];
  const text = ["Image1", "Image2", "Image3"];
  return (
    <>
      <StyledHeader>Classes</StyledHeader>
      <Carousel images={images} text={text} />
      <StyledHeader>Pricing</StyledHeader>
    </>
  );
}

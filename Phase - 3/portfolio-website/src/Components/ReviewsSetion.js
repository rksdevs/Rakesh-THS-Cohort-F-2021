import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ReviewItem from "../Components/ReviewItem";

function ReviewsSetion() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "We reached out to Rakesh for a website for our construction business. He has helped us with a beautiful, fast and responsive website & delivered to us within teh requested time. - Harithra Construction"
            }
          />
          <ReviewItem
            text={
              "Reached out to Rakesh via a friend for a one stop website for all of my businesses within WingdinG. He has given a great digital presence with this fresh wesbite, also with admin access to update our galleries with the pictures we want! Fantastic service. - Anoop WingdinG"
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSetion;

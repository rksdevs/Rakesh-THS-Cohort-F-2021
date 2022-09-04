import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Featured from "../components/Featured";

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <Featured />
      </HomeContainer>
    </div>
  );
};
export default Home;

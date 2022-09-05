import styled from "styled-components";

const PListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #eeeeee;
  padding: 10px;
`;
const PListItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #f50057;
  cursor: pointer;
  overflow: hidden;
`;
const PListImg = styled.img`
  flex: 1;
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  z-index: 1;
`;
const PListTitles = styled.div``;

const PListHeading = styled.h1`
  font-size: 18px;
`;
const PListSubHeading = styled.h2`
  font-size: 14px;
  font-weight: 300;
`;

const PropertyList = () => {
  return (
    <PListContainer>
      <PListItem>
        <PListImg
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt="Hotels"
        />
        <PListTitles>
          <PListHeading>Hotels</PListHeading>
          <PListSubHeading>45733 Hotels</PListSubHeading>
        </PListTitles>
      </PListItem>
      <PListItem>
        <PListImg
          src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt="Apartments"
        />
        <PListTitles>
          <PListHeading>Apartments</PListHeading>
          <PListSubHeading>45734 Apartments</PListSubHeading>
        </PListTitles>
      </PListItem>
      <PListItem>
        <PListImg
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt="Resorts"
        />
        <PListTitles>
          <PListHeading>Resorts</PListHeading>
          <PListSubHeading>45733 Resorts</PListSubHeading>
        </PListTitles>
      </PListItem>
      <PListItem>
        <PListImg
          src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt="Villas"
        />
        <PListTitles>
          <PListHeading>Villas</PListHeading>
          <PListSubHeading>45731 Villas</PListSubHeading>
        </PListTitles>
      </PListItem>
    </PListContainer>
  );
};
export default PropertyList;

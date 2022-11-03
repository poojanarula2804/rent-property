import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropertyCard from "./PropertyCard";
import "./styling.css";

function Properties(props) {
  // Properties array hard coded
  const property = [
    {
      id: "1",
      bhk: 3,
      city: "Delhi",
      movein_date: new Date(2022, 10, 1),
      description:
        "Spacious, fully-furnished place for family, pet friendly environment",
      rent: 30000,
      image:
        "https://is1-3.housingcdn.com/01c16c28/5cdcf9705840b8efeca4b45955b76e1b/v0/fs/1_bhk_independent_house-for-rent-saket-New+Delhi-living_room.jpg",
    },
    {
      id: "2",
      bhk: "1",
      city: "Delhi",
      movein_date: new Date(2022, 11, 15),
      description:
        "semi-furnished place for family, nearby market and eateries",
      rent: 7000,
      image:
        "https://mediacdn.99acres.com/media1/14962/11/299251640M-1622607525027.jpg",
    },
    {
      id: "3",
      bhk: 2,
      city: "Mumbai",
      movein_date: new Date(2022, 12, 10),
      description:
        "fully-furnished place, food and cleaning facilities available",
      rent: 19000,
      image:
        "https://is1-3.housingcdn.com/01c16c28/9bef2eae5d8b5fe152fbdb0be2246408/v0/fs/2_bhk_independent_house-for-rent-sector_18_noida-Noida-hall.jpg",
    },
    {
      id: "4",
      bhk: 1,
      city: "Mumbai",
      movein_date: new Date(2023, 1, 15),
      description: "Studio room, fully-furnished, pet friendly, well-connected",
      rent: 11000,
      image:
        "https://teja10.kuikr.com/i5/20220906/1-BHK-rent-Apartment-in-Keshav-Nagar--Pune-ak_LWBP1292771506-1662442417_gv.jpeg",
    },
    {
      id: "5",
      bhk: 2,
      city: "Bangalore",
      movein_date: new Date(2022, 12, 1),
      description:
        "Spacious, semi-furnished for family or students, nearby tech-park",
      rent: 21000,
      image:
        "https://is1-3.housingcdn.com/01c16c28/530b44f1cdf030b72eed03314a52a6f1/v0/fs/2_bhk_apartment-for-rent-sector_62_1-Noida-hall.jpg",
    },
    {
      id: "6",
      bhk: 3,
      city: "Bangalore",
      movein_date: new Date(2022, 12, 15),
      description:
        "Very Spacious, fully-furnished, safe locality, rated one of the top societies",
      rent: 35000,
      image:
        "https://i.pinimg.com/originals/ee/0f/c2/ee0fc24e6e67ff96e4cb03f0c723a8e8.jpg",
    },
  ];

  // Filtering array based on input filters
  function filterResults(property) {
    return (
      (props.filters.location == undefined ||
        props.filters.location == "" ||
        props.filters.location == property.city) &&
      (props.filters.rent == undefined ||
        props.filters.rent == "" ||
        props.filters.rent >= property.rent) &&
      (props.filters.type == undefined ||
        props.filters.type == "" ||
        props.filters.type == property.bhk) &&
      (props.filters.date == undefined ||
        props.filters.date == "" ||
        property.movein_date < props.filters.date)
    );
  }
  const desiredProperties = property.filter(filterResults);
  return (
    <div className="container-style">
      <Row xs={1} md={4}>
        {desiredProperties.map((property) => (
          <Col className="mt-4 centered">
            <PropertyCard
              bhk={property.bhk}
              rent={property.rent}
              movein_date={property.movein_date}
              city={property.city}
              description={property.description}
              image={property.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Properties;

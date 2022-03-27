import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  latestPortfolio,
  fullstackPortfolio,
  frontendPortfolio,
  backendPortfolio,
  cliPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("latest");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "latest",
      title: "Latest",
    },
    {
      id: "fullstack",
      title: "Fullstack Apps",
    },
    {
      id: "frontend",
      title: "Frontend Apps",
    },
    {
      id: "backend",
      title: "Backend Codes",
    },
    {
      id: "CLI",
      title: "CLI Codes",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "latest":
        setData(latestPortfolio);
        break;
      case "fullstack":
        setData(fullstackPortfolio);
        break;
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "CLI":
        setData(cliPortfolio);
        break;
      default:
        setData(latestPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <div className="item-contents">
              <p style={{ marginRight: "10px" }}>Git Url</p>
              <p>Website</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

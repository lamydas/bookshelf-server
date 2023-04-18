import React, { useState,useEffect } from "react";
import Rate from "./components/Rate";
import Details from "./components/Details";
import { getRates, getDetails } from "./services/stocksService";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  useEffect(  ()=> {

        getRates().then(data => setStocks(data))
    }

 ,[] );

 useEffect(()=>
  {getDetails(selected).then(data=>{setDetails(data[0]);})}
     ,[selected]);


  return (
    <div className="app">
      <h1 onClick={() => setShowDetails(false)}>Stock Master</h1>
      <div className="stock-list">
        {!showDetails &&
          stocks &&
          stocks.map(({ id, sym, name, current }) => (
            <Rate
              sym={sym}
              name={name}
              current={current}
              key={id}
              onSelect={() => {
                setSelected(sym);
                setShowDetails(true);
              }}
            />
          ))}

        {showDetails && details && <Details data={details} />}
      </div>
    </div>
  );
};

export default App;



const dataSet = [
    {
      id: "1",
      sym: "H",
      name: "Hyatt Hotels Corporation",
      current: 85.74,
      open: 85.44,
      marketCap: "8.81B",
      high: 85.89,
      low: 85.11,
      prevClose: 85.35
    },
    {
      id: "2",
      sym: "TSLA",
      name: "Tesla Inc.",
      current: 393.15,
      open: 380.63,
      marketCap: "70.86B",
      high: 395.22,
      low: 380.58,
      prevClose: 378.99
    },
    {
      id: "3",
      sym: "GOOG",
      name: "Alphabet Inc.",
      current: 1352.62,
      open: 1356.6,
      marketCap: "932.47B",
      high: 1360.47,
      low: 1351.0,
      prevClose: 1355.12
    },
    {
      id: "4",
      sym: "FB",
      name: "Facebook, Inc.",
      current: 202.5,
      open: 200.09,
      marketCap: "577.48B",
      high: 204.3,
      low: 200.09,
      prevClose: 198.39
    }
  ];
  
  export const getRates = () =>
    Promise.resolve(
      dataSet.map(d => {
        return {
          id: d.id,
          sym: d.sym,
          name: d.name,
          current: d.current
        };
      })
    );
  
  export const getDetails = sym =>
    Promise.resolve(dataSet.filter(d => d.sym === sym));

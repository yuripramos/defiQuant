import axios from "axios";
import { useEffect, useState } from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import { ONCHAIN_URL, QUANT_URL, query } from "../API/data";
import QuantTable from "./QuantTable";
import OnChainTable from "./OnChainTable";

const Dashboard = () => {
  const [firstToken, setFirstToken] = useState("");
  const [secondToken, setSecondToken] = useState("");
  const [chain, setChain] = useState("");
  const [timeframe, setTimeFrame] = useState("");
  const [queryResult, setQueryResult] = useState(null);
  const [quantResult, setQuantResult] = useState();

  const bulkQuery = JSON.stringify({
    secret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjM4MzhkNmFmYzVhOGFkZmVjOWFiMjFiIiwiaWF0IjoxNjY5NjcwMDYzLCJleHAiOjMzMTc0MTM0MDYzfQ.iw38az63RA43r85udiuCRfJKnVIrpNJjQI3hqDUgdZc",
    construct: {
      exchange: "binance",
      symbol: `${firstToken}/${secondToken}`,
      interval: timeframe,
      indicators: [
        {
          indicator: "atr",
          period: 10,
        },
        {
          indicator: "obv",
        },
        {
          indicator: "ma",
          period: 30,
        },
      ],
    },
  });

  const fetchQuant = async () => {
    const {
      data: { data },
    } = await axios.post(QUANT_URL, bulkQuery, {
      headers: { "Content-Type": "application/json" },
    });

    setQuantResult(data);
  };

  const fetchData = async () => {
    const {
      data: { data },
    } = await axios.post(ONCHAIN_URL, { query: query });

    setQueryResult(data);
  };

  console.log("agora vem", quantResult);

  return (
    <div className="relative flex items-center justify-between w-[1000px]">
      <div>
        <div className="w-72 my-2.5">
          <Select
            label="Selecione o primeiro token"
            onChange={(e) => setFirstToken(e)}
          >
            <Option value="USDC">USDC</Option>
            <Option value="USDT">USDT</Option>
            <Option value="BNB">BNB</Option>
            <Option value="WBTC">WBTC</Option>
            <Option value="ETH">ETH</Option>
            <Option value="DAI">DAI</Option>
            <Option value="BUSD">BUSD</Option>
          </Select>
        </div>
        <div className="w-72 my-2.5">
          <Select
            label="Selecione o segundo token"
            onChange={(e) => setSecondToken(e)}
          >
            <Option value="USDC">USDC</Option>
            <Option value="USDT">USDT</Option>
            <Option value="BNB">BNB</Option>
            <Option value="WBTC">WBTC</Option>
            <Option value="ETH">ETH</Option>
            <Option value="DAI">DAI</Option>
            <Option value="BUSD">BUSD</Option>
          </Select>
        </div>
        <div className="w-72 my-2.5">
          <Select
            variant="outlined"
            label="Selecione a rede desejada"
            onChange={(e) => setChain(e)}
          >
            <Option value="ETH">ETH</Option>
            <Option value="ETH">ETH</Option>
          </Select>
        </div>
        <div className="w-72 my-2.5">
          <Select
            variant="outlined"
            label="Período desejado em posição"
            onChange={(e) => setTimeFrame(e)}
          >
            <Option value="4h">H4</Option>
            <Option value="1d">1D</Option>
          </Select>
        </div>
        <div>
          <Button
            onClick={async () => {
              fetchQuant();
              fetchData();
            }}
          >
            Buscar
          </Button>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="m-10 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {quantResult && <QuantTable quantArray={quantResult} />}
                {queryResult && <OnChainTable onChainArray={queryResult} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

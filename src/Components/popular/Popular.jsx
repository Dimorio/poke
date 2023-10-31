import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Popular() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("error nigga:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="popular  mt-[60px] p-[30px] bg-[#1f2122] rounded-[23px]">
        <div className="row flex flex-wrap">
          <div className="lg-lag w-full max-w-full">
            <div className="header-section">
              <h3 className="text-[#fff] text-[32px] no-underline mb-[30px]">
                Popular
                <em className="not-italic text-[#5800b3] "> Pokemons</em>
              </h3>
            </div>
            <div className="row flex flex-wrap flex-row items-center justify-center">
              <>
                {data
                  ? data.map((poke, index) => {
                      return (
                        <div key={index} className="lg-col px-[10px]">
                          <Link to={`/pokemon/${poke.name}`}>
                            <div className="item rounded-[25px] px-[15px] py-[30px] bg-[#27292a] mb-[30px]">
                              <img
                                className="w-full rounded-[25px] overflow-hidden"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                  index + 1
                                }.png
                              `}
                                alt={poke.name}
                              />
                              <h4 className="text-[15px] mt-[20px] mb-0 inline-block text-white capitalize font-bold">
                                {poke.name}
                              </h4>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

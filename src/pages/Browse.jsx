import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header/Header";

export default function Browse() {
  const [data, setData] = useState([]);
  let { name } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=200" + name
        );
        const result = await response.json();
        setData(result.results);
        console.log(result.results);
      } catch (error) {
        console.error("error nigga:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header className="custom-class" />
      <div className="popular  mt-[60px] p-[30px] bg-[#1f2122] rounded-[23px]">
        <div className="row flex flex-wrap">
          <div className="lg-lag w-full max-w-full">
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
                                }.png`}
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

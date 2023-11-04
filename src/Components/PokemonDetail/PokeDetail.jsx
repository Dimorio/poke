import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

export default function PokeDetail() {
  let { id } = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        const result = await response.json();
        setPokemon(result);
      } catch (error) {
        console.error("error nigga:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <Header />
      <div className="col-cal container m-auto px-[15px]">
        {pokemon && (
          <div className="flex justify-center items-center min-h-[100vh] flex-col">
            <span className="col-cl">
              <h1 className="text-[100px] uppercase text-white mb-6">
                {pokemon.name}.
              </h1>
            </span>
            <div className="card w-[700px] bg-[#27292a] h-auto rounded-[12px]">
              <div className="flex justify-center items-center flex-col py-[1.5rem] px-4">
                <div className="flex mb-6">
                  <img
                    src={pokemon.sprites.front_shiny}
                    alt=""
                    width="400px"
                    className=" img-1 p-0"
                  />
                  <img
                    src={pokemon.sprites.back_shiny}
                    alt=""
                    width="400px"
                    className="border-none p-0"
                  />
                </div>

                <div className="text-white text-center">
                  <div>
                    <h3 className="my-2">
                      Types:{" "}
                      {pokemon.types.map((t, index) => (
                        <span key={index}>
                          {t.type.name}
                          {index !== pokemon.types.length - 1 && ", "}
                        </span>
                      ))}
                    </h3>
                  </div>
                  <div>
                    <h3>
                      Abilities:{" "}
                      {pokemon.abilities.map((a, index) => (
                        <span key={index}>
                          {a.ability.name}
                          {index !== pokemon.types.length - 1 && ", "}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

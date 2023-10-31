import React from "react";
import Popular from "../popular/Popular";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="container mx-auto mb-5 px-[15px]">
        <div className="row flex flex-wrap">
          <div className="lg-col w-full max-w-full flex-shrink-0">
            <div className="page-content mt-[110px] bg-[#27292a] p-[60px] rounded-[23px]">
              <div className="main-banner bg-[url('./images/poko.jpg')] bg-bottom bg-cover min-h-[380px] rounded-[23px] py-[80px] px-[60px] ">
                <div className="row flex flex-wrap">
                  <div className="lg-lg-col  w-full max-w-full flex-shrink-0 ">
                    <div className="head-text">
                      <h6 className="text-[20px] text-[#fff] font-[400] mb-[25px]">
                        PokeSoap at your service
                      </h6>
                      <h4 className="text-[45px] uppercase mb-[25px]">
                        <em className="not-italic text-[#5800b3]">Browse </em>
                        Your favorite <br /> Pokemon here
                      </h4>
                      <div className="main-button">
                        <Link
                          className="text-[18px] text-white bg-[#5800b3] px-[30px] py-[12px] inline-block rounded-[25px] font-[400] capitalize overflow-hidden relative tracking-[.5px]"
                          to="/browse"
                        >
                          Browse
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Popular />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

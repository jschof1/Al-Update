import React from 'react';
// import Layout from '../../components/layout/Layout';
import Navbar from '../../components/navbar/Navbar';


const Animation = () => {
  return (
    <>
    <Navbar />
      <div id="giflist" className="clearfix">
        <div className="flex flex-wrap overflow-hidden sm:-mx-3">
          <div className="w-1/4 overflow-hidden sm:my-3 sm:px-3">
            <a href="">
              <div id="img_wrap" className="static">
                <img
                  id="animated"
                  src="https://raw.githubusercontent.com/jschof1/Al-Robertston-website/main/gifs/2022-SHOWREEL.gif"
                />
                <img
                  id="static"
                  src="https://raw.githubusercontent.com/jschof1/Al-Robertston-website/main/gifs/2022-SHOWREEL-still.jpg"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      </>
  );
};
export default Animation;

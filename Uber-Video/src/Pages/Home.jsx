import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Example with a traffic light image */}
      <div
        className="bg-cover bg-center h-screen flex pt-8 justify-between flex-col w-full"
        style={{ backgroundImage: 'url("assets/images/photo-1557404763-69708cd8b9ce.avif")' }}
      >
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

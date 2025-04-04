import React from 'react'
import TwoHands from '../assets/two-hands.jpg'

function HomePage() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${TwoHands})` }}
        src={TwoHands}
        alt="Background"
        className="relative flex flex-col items-center justify-center text-center h-screen rounded-xl bg-cover bg-center"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold">Welcome to Crowdfy</h1>
              <p className="text-white text-lg mt-4">Your one-stop solution for crowdfunding</p>
              <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</button>
          </div>


    </>
  );
}

export default HomePage
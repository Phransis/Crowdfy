import React from 'react'

function Campaigns() {
  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-bold text-center'>Campaigns</h1>
      <p className='text-center text-gray-600 mt-4'>
        Explore our latest campaigns and support your favorite causes.
      </p>
      <div className='mt-8'>
        {/* Add your campaign cards or components here */}
        {/* Example: */}
        <div className='bg-white shadow-md rounded-lg p-4'>
          <h2 className='text-xl font-semibold'>Campaign Title</h2>
          <p className='text-gray-700 mt-2'>Campaign description goes here.</p>
          <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
            Support Campaign
          </button>
        </div>
      </div>
      {/* Add more campaign cards as needed */}
      {/* Example: */}
      <div className='bg-white shadow-md rounded-lg p-4 mt-4'>
        <h2 className='text-xl font-semibold'>Another Campaign Title</h2>
        <p className='text-gray-700 mt-2'>Another campaign description goes here.</p>
        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
          Support Campaign
        </button>
      </div>
      {/* Add more campaign cards as needed */}
      {/* Example: */}
      <div className='bg-sky-700 shadow-md rounded-lg p-4 mt-4'>
        <h2 className='text-xl font-semibold'>Yet Another Campaign Title</h2>
        <p className='text-gray-700 mt-2'>Yet another campaign description goes here.</p>
        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
          Support Campaign
        </button>
      </div>
      Campaigns
    </div>
  )
}

export default Campaigns
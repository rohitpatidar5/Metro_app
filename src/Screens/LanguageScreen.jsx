import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const LanguageScreen = ({ onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    onSelectLanguage(lang);
  };

  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col   bg-gradient-to-r from-[#99C3AF]/70 to-[#FEF08A]/70 p-4">
        <Link to='/wel'>
        <IoArrowBack className='text-2xl my-4' />
        </Link>
        <div className=' rounded-2xl  bg-white p-4'>
      <h1 className="mb-4 text-xl font-semibold text-gray-800">Select Language</h1>
      <p className=''>Choose your language prefrence to ensure a personalized and seemless expreience</p>
      <div className="mb-6">
        <label className="block mb-4 border rounded-2xl  m-4 border-black p-6">
          <input 
            type="radio" 
            name="language" 
            value="English" 
            checked={selectedLanguage === 'English'}
            onChange={() => handleSelect('English')}
          />
          <span className="ml-2">English</span>
        </label>
        <label className="block mb-4 border rounded-2xl  m-4 border-black p-6">
          <input 
            type="radio" 
            name="language" 
            value="Bangla" 
            checked={selectedLanguage === 'Bangla'}
            onChange={() => handleSelect('Bangla')}
          />
          <span className="ml-2">Bangla</span>
        </label>
      </div>
    
    <Link to='number '>
      <button className="bg-green-700 text-white py-2 px-4 rounded-2xl w-[250px] ml-6 mt-[260px]">Continue</button>
      </Link>
      </div>
    </div>
  );
};

export default LanguageScreen;

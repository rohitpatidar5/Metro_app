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
    <div className="min-w-screen min-h-screen bg-white flex flex-col justify-between bg-gradient-to-r from-[#99C3AF] from-opacity-90 to-[#FEF08A] to-opacity-80">
        <IoArrowBack className='text-2xl mt-6 ml-6' />
        <div className=' rounded-xl m-4 bg-white p-4 '>
      <h1 className="text-3xl font-bold mb-8">Select Language</h1>
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
      <button className="bg-green-500 text-white py-2 px-4 rounded-2xl w-[250px] ml-6 mt-[250px]">Continue</button>
      </Link>
      </div>
    </div>
  );
};

export default LanguageScreen;

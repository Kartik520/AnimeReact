import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import VideoPlayer from "../components/VideoPlayer";
import change_image_character from "../utils/changeCharaterImage";
import characters from "../data/characterData";
import CharacterVideoList from "../components/CharacterVideoList";
import Footer from "../components/Footer";

const AnimePage = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);
  const [SearchValue, setSearchValue] = useState('');

  const handlePlay = (name) => {
    if (activeCharacter === name) {
      change_image_character(name, 2); // stop
      setActiveCharacter(null);
    } else {
      change_image_character(name, 1); // play
      setActiveCharacter(name);
    }
  };

  const getVideoId = (characterName) => {
    const found = characters.find((c) => c.name === characterName);
    return found ? found.videoId : "";
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800">


      <main className="flex-grow container w-full mx-auto px-4 py-6">
        {characters.map((char) => {
          if (activeCharacter && activeCharacter !== char.name) return null;

          return (
            <div className="flex flex-col items-center">

            <CharacterCard
              key={char.name}
              character={char}
              color={char.waveColor}
              onPlay={handlePlay}
              isActive={activeCharacter === char.name}
            />
                          
            </div>
          );
        })}

        {activeCharacter && (
          <div className="flex flex-col items-center">
            <input
              type="text"
              id="Videotxt"
              placeholder="Search character video"
              value={SearchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-transparent transition-all duration-200 mb-4"
            />

            <CharacterVideoList
              character={activeCharacter}
              SearchValue={SearchValue}
            />
          </div>
        )}

        <VideoPlayer
          character={activeCharacter}
          characterId={getVideoId(activeCharacter)}
        />
      </main>


    </div>
  );
};

export default AnimePage;

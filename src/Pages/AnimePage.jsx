import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import VideoPlayer from "../components/VideoPlayer";
import change_image_character from "../utils/changeCharaterImage";
import characters from "../data/characterData";
import CharacterVideoList from "../components/CharacterVideoList";

const AnimePage = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);
  const [SearchValue, setSearchValue] = useState('');

  const handlePlay = (name) => {
    if (activeCharacter === name) {
      console.log(name);
      console.log("this is active character " + activeCharacter);
      change_image_character(name, 2); // stop
      setActiveCharacter(null);
    } else {
      console.log(name);
      console.log(activeCharacter);
      change_image_character(name, 1); // play
      setActiveCharacter(name);
    }
  };

  const getVideoId = (characterName) => {
    const found = characters.find((c) => c.name === characterName);
    return found ? found.videoId : "";
  };

  return (
    <div className="text-gray-800">
      <Navbar />
      <div className="container w-full mx-auto px-4 py-6">
        {characters.map((char) => {
          if (activeCharacter && activeCharacter !== char.name) return null;

          return (
            <CharacterCard
              key={char.name}
              character={char}
              onPlay={handlePlay}
              isActive={activeCharacter === char.name}
            />
          );
        })}
        {activeCharacter && (
          <>
            <input
              type="text"
              placeholder="Search character video"
              value={SearchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />

            <CharacterVideoList
              character={activeCharacter}
              SearchValue={SearchValue}
            />
          </>
        )}
        <VideoPlayer
          character={activeCharacter}
          characterId={getVideoId(activeCharacter)}
        />
      </div>
    </div>
  );
};

export default AnimePage;

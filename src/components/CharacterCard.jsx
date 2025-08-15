import React from "react";
import characters from "../data/characterData";

const CharacterCard = ({ character,color, onPlay, isActive }) => {
  return (
    <>
      <div
        className={`card p-4 border shadow rounded mb-4  ${
          isActive ? "Activecard" : ""
        }`}
      >
        characters
        <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill={color}
            fill-opacity="5"
            d="M0,160 C480,260 960,60 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>

        <img
          className="card_image absolute transition-all duration-500 ease-in-out"
          src={`${character.image}`}
        ></img>
        <div class="card-body flex justify-between items-center">
          <header>
            <h2 class="card-title transition-all duration-500 ease-in-out">
              {character.name}
            </h2>
          </header>
          <br />
          <p class="card-text transition-all duration-1000 ease-in-out">
            "{character.quote}"
          </p>

          <button
            className={`playbtn text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none 
              ${
             isActive
            ? "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 playbtn transition-transform duration-300 ease-in-out hover:-translate-y-4 ..."
             : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-1000 ease-in-out playbtn transition-transform  hover:-translate-y-4 ..."
              }`}
            data-character={character.name}
            onClick={() => onPlay(character.name)}
          >
            {isActive ? "stop" : "play"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;

//  <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
//     <path fill="#ffffff" fill-opacity="0.5" d="M0,160 C480,260 960,60 1440,160 L1440,0 L0,0 Z"></path>
//   </svg>
//   <img id="${char.id}" src="${char.image}" alt="${char.name}"
//     class="card_image absolute transition-all duration-500 ease-in-out" />
//   <div class="card-body flex justify-between items-center">
//     <header>
//       <h2 class="card-title transition-all duration-500 ease-in-out">${char.name}</h2>
//     </header>
//     <br />
//     <p class="card-text transition-all duration-1000 ease-in-out">
//       "${char.quote}"
//     </p>
//     <button data-character="${char.id}" data-color="${char.waveColor}"
//       class="playbtn duration-1000 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
//       play
//     </button>
//     <div class="video-container hidden mt-4 w-full"></div>
//   </div>
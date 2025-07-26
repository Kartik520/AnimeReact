import React, { useEffect, useState } from "react";
import create_video_list from "../components/getanimeData.js";

/**
 * CharacterImageCycler
 * --------------------------------------------------------------
 * Displays an anime character image that automatically cycles
 * through a predefined list of sources every 3 seconds when the
 * component is **active** (e.g. on hover). When inactive, the
 * first image is shown as the default.
 *
 * Props
 * -----
 * character : string   // key in imageSources (e.g. "Gojo")
 * color     : string   // any colour you want to forward to create_video_list
 * className?: string   // tailwind utility classes for outer div
 *
 * Behaviour
 * ---------
 * • On **mouseenter** → starts slideshow & calls create_video_list(character, 1, color)
 * • On **mouseleave** → stops slideshow   & calls create_video_list(character, 2, color)
 */

const imageSources = {
  Gojo: [
    "https://i.postimg.cc/7CRyJkw0/gojo.png",
    "images/gojo2.png",
    "https://i.postimg.cc/Yq5yKqTx/gojo3.png",
  ],
  Naruto: [
    "https://i.postimg.cc/Yvb7kFPX/Naruto.png",
    "images/naruto2.png",
  ],
  Tanjiro: [
    "https://i.postimg.cc/rdskpmXq/Tanjiro.png",
    "images/tanjiro2.png",
  ],
  Levi: [
    "https://i.postimg.cc/yDVKwjLg/levi.png",
    "images/levi2.png",
  ],
  Asta: [
    "https://i.postimg.cc/Mv0xPNmJ/Asta.png",
    "images/asta2.png",
  ],
  Saitama: [
    "https://i.postimg.cc/7frwNw7N/saitama.png",
    "images/saitama2.png",
  ],
};

const CharacterImageCycler = ({ character, color, className = "" }) => {
  const sources = imageSources[character] || [];
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  // Manage the interval for image cycling
  useEffect(() => {
    if (!active || sources.length <= 1) return; // don't start if inactive or single image

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % sources.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [active, sources.length]);

  // Call create_video_list when active state changes
  useEffect(() => {
    if (!character) return;
    // flag: 1 = start, 2 = stop (to mimic original function)
    create_video_list(character, active ? 1 : 2, color);
  }, [active, character, color]);

  // Reset to first image when deactivated
  useEffect(() => {
    if (!active) setIndex(0);
  }, [active]);

  // Guard: no valid sources
  if (sources.length === 0) return null;

  return (
    <div
      className={`inline-block cursor-pointer overflow-hidden ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        id={character}
        src={sources[index]}
        className="transition-transform duration-300 hover:scale-105 select-none"
      />
    </div>
  );
};

export default CharacterImageCycler;

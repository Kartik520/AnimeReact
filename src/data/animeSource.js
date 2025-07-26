const AnimeSource = {
  Gojo: {
    name: "Gojo Satoru",
    age: 25,
    isSage: true,
    videos: [
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
    ],
  },
  Naruto: {
    name: "Naruto Uzumaki",
    age: 18,
    isSage: true,
    videos: [
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
    ],
  },
  Tanjiro: {
    name: "Tanjiro Kamado",
    age: 18,
    isSage: true,
    videos: [
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
    ],
  },
  Levi: {
    name: "Levi Ackerman",
    age: 18,
    isSage: true,
    videos: [
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
    ],
  },
  Asta: {
    name: "Asta",
    age: 18,
    isSage: true,
    videos: [
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
    ],
  },
  Saitama: {
    name: "Saitama",
    age: 18,
    isSage: true,
    videos: [
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
      { title: "Episode 1", url: "https://www.youtube.com/watch?v=video1" },
      { title: "Episode 2", url: "https://www.youtube.com/watch?v=video2" },
      { title: "Episode 3", url: "https://www.youtube.com/watch?v=video3" },
      { title: "Episode 4", url: "https://www.youtube.com/watch?v=video4" },
    ],
  },
};

export default AnimeSource;

// export default function create_video_list(character, flag,color) {
//   const videoPlayer = document.getElementById("videoPlayer");
//   const charData = AnimeSource[character];
//   console.log('color '+ color)
//   if (!videoPlayer || !charData) return;   

//   if (flag === 1) {
//     const videos = charData.videos;
//     let videoListHTML = `<div class="grid grid-cols-1 gap-4">`;

//     for (const video of videos) {
//       const videoId = getVideoIdFromUrl(video.url);
//       videoListHTML +=  `
//         <div class="character-card snap-center relative ${color} shadow-lg p-4 rounded-2xl transition-all duration-300 ease-in-out text-center">
//           <svg class="absolute bottom-0 left-0 w-full h-40 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
//             <path fill="#ffffff" fill-opacity="0.5"
//               d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,122.7C672,128,768,128,864,122.7C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z">
//             </path>
//           </svg>
//           <h3 class="relative z-10 text-xl font-semibold mb-2 text-gray-800">${video.title}</h3>
//           <iframe class="relative z-10 rounded-md w-full" height="200"
//             src="https://www.youtube.com/embed/${videoId}?autoplay=0"
//             title="${video.title}" frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen></iframe>
//         </div>
//       `;
//     }
   
//     console.log('created... ')
//     videoPlayer.innerHTML = videoListHTML;
//     videoPlayer.classList.remove("hidden");
//        const cards = document.querySelectorAll('.character-card');
//      function updateCardScales() {
//       const centerY = window.innerHeight / 2;
//       cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         const cardCenterY = rect.top + rect.height / 2;
//         const distance = Math.abs(centerY - cardCenterY);
//         let scale = 1;
//         let opacity = 1;

//         if (distance < 100) {
//           scale = 1;
//           opacity = 1;
//         } else if (distance < 250) {
//           scale = 0.9;
//           opacity = 0.8;
//         } else if (distance < 400) {
//           scale = 0.8;
//           opacity = 0.6;
//         } else {
//           scale = 0.7;
//           opacity = 0.4;
//         }
//         card.style.transform = `scale(${scale})`;
//         card.style.opacity = opacity;
//       });
//     }
//     videoPlayer.addEventListener('scroll', updateCardScales);
//     window.addEventListener('resize', updateCardScales);
//     setTimeout(updateCardScales, 100); // ensure scales after render
//   } else {
//     videoPlayer.innerHTML = "";
//     videoPlayer.classList.add("hidden");
//   }
// }
// function getVideoIdFromUrl(url) {
//   const match = url.match(/v=([^&]+)/);
//   return match ? match[1] : "";
// }


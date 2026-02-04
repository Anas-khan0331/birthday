// // "use client";
// // import { useEffect, useState } from "react";
// // import fireConfetti from "canvas-confetti";

// // export default function MalaikaBirthday() {
// //   const [started, setStarted] = useState(false);
// //   const [currentIdx, setCurrentIdx] = useState(0);
// //   const [cardActive, setCardActive] = useState(false);
// //   const [floatingItems, setFloatingItems] = useState([]);

// //   const data = [
// //     {
// //       img: "https://images.unsplash.com/photo-1518510204753-f4424f9feae7?q=80&w=500",
// //       title: "Most Beautiful",
// //       note: "In a world of billions, my eyes only search for you. You are the most beautiful girl I have ever known.",
// //     },
// //     {
// //       img: "https://images.unsplash.com/photo-1516195851888-6f1a981a8a21?q=80&w=500",
// //       title: "My Whole Heart",
// //       note: "Happy Birthday, Malaika! You aren't just in my life; you are my life. Forever isn't long enough with you.",
// //     },
// //     {
// //       img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=500",
// //       title: "Pure Magic",
// //       note: "Every time you smile, the world feels brighter. Thank you for being the magic that I need every day.",
// //     },
// //   ];

// //   useEffect(() => {
// //     const icons = ["🎈", "❤️", "💖", "🧸", "🌸"];
// //     const items = Array.from({ length: 20 }).map((_, i) => ({
// //       id: i,
// //       icon: icons[Math.floor(Math.random() * icons.length)],
// //       left: Math.random() * 100,
// //       delay: Math.random() * 15,
// //       size: Math.random() * 30 + 30,
// //     }));
// //     setFloatingItems(items);
// //   }, []);

// //   const fireConfetti = () => {
// //     fireConfetti({
// //       particleCount: 70,
// //       spread: 60,
// //       origin: { y: 0.7 },
// //       colors: ["#ff8fa3", "#ffffff", "#ffd1d5"],
// //     });
// //   };

// //   const startApp = () => {
// //     setStarted(true);
// //     setCardActive(true);
// //     fireConfetti();
// //   };

// //   const nextCard = () => {
// //     setCardActive(false); // Trigger exit animation
// //     setTimeout(() => {
// //       setCurrentIdx((prev) => (prev + 1) % data.length);
// //       setCardActive(true); // Trigger entry animation
// //       fireConfetti();
// //     }, 600);
// //   };

// //   return (
// //     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffe4e8_100%)] font-sans text-[#a67c7c]">
// //       {/* Floating Background Elements */}
// //       <div className="fixed inset-0 pointer-events-none z-0">
// //         {floatingItems.map((item) => (
// //           <span
// //             key={item.id}
// //             className="absolute bottom-[-120px] animate-floatUp opacity-80"
// //             style={{
// //               left: `${item.left}vw`,
// //               animationDelay: `${item.delay}s`,
// //               fontSize: `${item.size}px`,
// //             }}
// //           >
// //             {item.icon}
// //           </span>
// //         ))}
// //       </div>

// //       <main className="relative z-10 w-full max-w-[400px] px-6 text-center">
// //         {!started ? (
// //           <div className="animate-fadeIn">
// //             <h1 className="font-serif text-7xl md:text-8xl mb-8 drop-shadow-lg text-[#ff8fa3] italic">
// //               Malaika
// //             </h1>
// //             <button
// //               onClick={startApp}
// //               className="bg-[#ff8fa3] text-white px-10 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform shadow-xl hover:bg-[#ff758c]"
// //             >
// //               CLICK HERE ✨
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="relative h-[550px] w-full perspective-1000">
// //             <div
// //               className={`absolute inset-0 bg-white/60 backdrop-blur-md rounded-[30px] p-6 border border-white/80 shadow-2xl flex flex-col items-center transition-all duration-700 ease-in-out
// //                 ${cardActive ? "opacity-100 translate-y-0 rotate-x-0" : "opacity-0 -translate-y-20 rotate-x-12 pointer-events-none"}
// //               `}
// //             >
// //               <div className="w-full h-[280px] rounded-2xl overflow-hidden border-4 border-white mb-4">
// //                 <img
// //                   src={data[currentIdx].img}
// //                   alt="Celebration"
// //                   className={`w-full h-full object-cover transition-transform duration-[4000ms] ${cardActive ? "scale-110" : "scale-100"}`}
// //                 />
// //               </div>
// //               <h2 className="font-serif text-4xl mb-2 text-[#7d5a5a] italic">
// //                 {data[currentIdx].title}
// //               </h2>
// //               <p className="text-[0.95rem] leading-relaxed text-[#8b7373] font-medium mb-6">
// //                 {data[currentIdx].note}
// //               </p>
// //               <button
// //                 onClick={nextCard}
// //                 className="mt-auto bg-white border border-[#ff8fa3] text-[#ff8fa3] px-8 py-2 rounded-full font-bold hover:bg-[#fff0f5] transition-colors"
// //               >
// //                 CONTINUE 🌸
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </main>

// //       {/* Tailwind and Global Styles */}
// //       <style jsx global>{`
// //         @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@300;500;700&display=swap");

// //         .font-serif {
// //           font-family: "Dancing Script", cursive;
// //         }
// //         .font-sans {
// //           font-family: "Quicksand", sans-serif;
// //         }

// //         .perspective-1000 {
// //           perspective: 1000px;
// //         }

// //         @keyframes floatUp {
// //           0% {
// //             transform: translateY(0) rotate(0deg);
// //             opacity: 0;
// //           }
// //           10% {
// //             opacity: 0.8;
// //           }
// //           90% {
// //             opacity: 0.8;
// //           }
// //           100% {
// //             transform: translateY(-120vh) rotate(20deg);
// //             opacity: 0;
// //           }
// //         }

// //         .animate-floatUp {
// //           animation: floatUp 15s linear infinite;
// //         }

// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .animate-fadeIn {
// //           animation: fadeIn 1.5s ease-out;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// export default function MalaikaUltimateCard() {
//   const cardRef = useRef(null);
//   const coverRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [floatingItems, setFloatingItems] = useState([]);

//   // 1. Setup Background Floating Elements
//   useEffect(() => {
//     const icons = ["🎈", "❤️", "💖", "🧸", "🌸", "✨"];
//     const items = Array.from({ length: 25 }).map((_, i) => ({
//       id: i,
//       icon: icons[Math.floor(Math.random() * icons.length)],
//       left: Math.random() * 100,
//       delay: Math.random() * 10,
//       size: Math.random() * 20 + 25,
//       duration: Math.random() * 10 + 10,
//     }));
//     setFloatingItems(items);
//   }, []);

//   // 2. GSAP Animation for the 3D Flip
//   const toggleCard = () => {
//     if (!isOpen) {
//       // Open Card
//       gsap.to(coverRef.current, {
//         rotateY: -150,
//         duration: 1.5,
//         ease: "power2.inOut",
//       });
//       gsap.to(cardRef.current, {
//         z: 50,
//         x: 40,
//         rotate: -2,
//         duration: 1.5,
//         ease: "power2.inOut",
//       });

//       // Fire Confetti on open
//       import("canvas-confetti").then((confetti) => {
//         confetti.default({
//           particleCount: 100,
//           spread: 70,
//           origin: { y: 0.6 },
//           colors: ["#ff8fa3", "#ffffff", "#ffd1d5"],
//         });
//       });
//     } else {
//       // Close Card
//       gsap.to(coverRef.current, {
//         rotateY: 0,
//         duration: 1.2,
//         ease: "power2.inOut",
//       });
//       gsap.to(cardRef.current, {
//         z: 0,
//         x: 0,
//         rotate: 0,
//         duration: 1.2,
//         ease: "power2.inOut",
//       });
//     }
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffe4e8_100%)] font-sans">
//       {/* 3. FLOATING BACKGROUND (Interactive Layer) */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         {floatingItems.map((item) => (
//           <span
//             key={item.id}
//             className="absolute bottom-[-100px] animate-floatUp opacity-70"
//             style={{
//               left: `${item.left}vw`,
//               animationDelay: `${item.delay}s`,
//               animationDuration: `${item.duration}s`,
//               fontSize: `${item.size}px`,
//             }}
//           >
//             {item.icon}
//           </span>
//         ))}
//       </div>

//       {/* 4. THE 3D CARD (Main Interaction) */}
//       <main className="relative z-10 perspective-[1500px]">
//         <div
//           ref={cardRef}
//           onClick={toggleCard}
//           className="relative w-[340px] h-[480px] cursor-pointer preserve-3d transition-shadow duration-500 hover:shadow-2xl"
//         >
//           {/* INSIDE RIGHT PAGE (The Message) */}
//           <div className="absolute inset-0 w-full h-full bg-white rounded-r-2xl shadow-inner flex flex-col items-center justify-center p-8 text-center border-l border-pink-50">
//             <h2 className="font-serif text-3xl text-[#ff8fa3] mb-4 italic">
//               For You, Malaika
//             </h2>
//             <div className="w-12 h-[1px] bg-pink-200 mb-4"></div>
//             <p className="text-[#8b7373] leading-relaxed text-sm font-medium">
//               "On this special day, I just want you to know how much you mean to
//               me. You are the grace in my life and the joy in my heart. Happy
//               Birthday to the most beautiful girl in the universe."
//             </p>
//             <p className="mt-6 font-serif text-[#a67c7c] text-lg">
//               Forever Yours ✨
//             </p>
//           </div>

//           {/* FOLDING FRONT COVER */}
//           <div
//             ref={coverRef}
//             className="absolute inset-0 w-full h-full preserve-3d origin-left z-20"
//           >
//             {/* FRONT OF CARD (Closed State) */}
//             <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl backface-hidden flex flex-col items-center justify-center border border-pink-50 p-6">
//               <div className="w-full h-full overflow-hidden rounded-xl shadow-md relative group">
//                 {/* Malaika's Photo */}
//                 <img
//                   src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=500"
//                   alt="Malaika"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-pink-100/40 to-transparent"></div>
//               </div>
//               <div className="mt-4 text-center">
//                 <h1 className="font-serif text-2xl text-[#ff8fa3] italic tracking-widest">
//                   Happy Birthday
//                 </h1>
//                 <p className="text-[9px] uppercase tracking-[4px] text-gray-400 mt-1">
//                   Tap to Open Magic
//                 </p>
//               </div>
//             </div>

//             {/* BACK OF COVER (Left Side when opened) */}
//             <div className="absolute inset-0 w-full h-full bg-[#fffafa] rounded-2xl shadow-xl backface-hidden rotate-y-180 flex items-center justify-center p-6 border-r border-pink-100">
//               <div className="text-center">
//                 <span className="text-5xl block mb-4">🧸</span>
//                 <p className="font-serif text-[#a67c7c] text-xl px-4">
//                   You are my favorite person.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* 5. STYLES */}
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@500;700&display=swap");

//         .font-serif {
//           font-family: "Dancing Script", cursive;
//         }
//         .font-sans {
//           font-family: "Quicksand", sans-serif;
//         }

//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }

//         @keyframes floatUp {
//           0% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 0;
//           }
//           15% {
//             opacity: 0.7;
//           }
//           85% {
//             opacity: 0.7;
//           }
//           100% {
//             transform: translateY(-110vh) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         .animate-floatUp {
//           animation: floatUp linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Malaika3DAlbum() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [floatingItems, setFloatingItems] = useState([]);
  const coverRef = useRef(null);
  const cardRef = useRef(null);

  const albumData = [
    {
      img: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=500",
      title: "The Most Beautiful",
      note: "Every time I see this smile, I realize how lucky I am. You are my favorite view, Malaika.",
      backIcon: "🧸",
    },
    {
      img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=500",
      title: "My Angel",
      note: "Your name means Angel, and your heart proves it every single day. Happy Birthday!",
      backIcon: "💖",
    },
    {
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500",
      title: "Forever Yours",
      note: "I want to spend every birthday by your side. You are the grace in my world.",
      backIcon: "✨",
    },
  ];

  // 1. Background Setup
  useEffect(() => {
    const icons = ["🎈", "❤️", "💖", "🧸", "🌸", "✨"];
    const items = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 20 + 25,
      duration: Math.random() * 10 + 10,
    }));
    setFloatingItems(items);
  }, []);

  // 2. Open/Close Logic
  const toggleCard = () => {
    if (!isOpen) {
      gsap.to(coverRef.current, {
        rotateY: -155,
        duration: 1.2,
        ease: "power2.inOut",
      });
      gsap.to(cardRef.current, {
        x: 40,
        z: 50,
        duration: 1.2,
        ease: "power2.inOut",
      });

      import("canvas-confetti").then((c) =>
        c.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#ff8fa3", "#ffd1d5"],
        }),
      );
    } else {
      gsap.to(coverRef.current, {
        rotateY: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(cardRef.current, {
        x: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }
    setIsOpen(!isOpen);
  };

  // 3. Next Card (Album Logic)
  const nextMemory = (e) => {
    e.stopPropagation(); // Don't flip the card when clicking button

    // Animate current card flying away
    const tl = gsap.timeline();
    tl.to(cardRef.current, {
      x: 500,
      opacity: 0,
      rotate: 20,
      duration: 0.6,
      ease: "power2.in",
    })
      .call(() => {
        setIsOpen(false);
        setCurrentIdx((prev) => (prev + 1) % albumData.length);
      })
      .set(coverRef.current, { rotateY: 0 })
      .set(cardRef.current, { x: -500, rotate: -20 })
      .to(cardRef.current, {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
      });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffe4e8_100%)] font-sans">
      {/* FLOATING DECORATIONS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingItems.map((item) => (
          <span
            key={item.id}
            className="absolute bottom-[-100px] animate-floatUp opacity-60"
            style={{
              left: `${item.left}vw`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              fontSize: `${item.size}px`,
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      {/* 3D ALBUM STACK */}
      <main className="relative z-10" style={{ perspective: "1500px" }}>
        <div
          ref={cardRef}
          onClick={toggleCard}
          className="relative w-[320px] h-[460px] cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* INSIDE PAGE (Right Side) */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-r-2xl shadow-inner flex flex-col items-center justify-center p-8 text-center border-l border-pink-50">
            <h2 className="font-serif text-2xl text-[#ff8fa3] mb-4 italic">
              {albumData[currentIdx].title}
            </h2>
            <p className="text-[#8b7373] text-sm leading-relaxed mb-6 font-medium px-2">
              "{albumData[currentIdx].note}"
            </p>
            <button
              onClick={nextMemory}
              className="bg-pink-50 text-[#ff8fa3] px-6 py-2 rounded-full text-xs font-bold border border-pink-100 hover:bg-pink-100 transition-colors"
            >
              NEXT MEMORY 🌸
            </button>
            <div className="mt-4 text-xs text-gray-300 font-bold">
              {currentIdx + 1} / {albumData.length}
            </div>
          </div>

          {/* COVER (Animated) */}
          <div
            ref={coverRef}
            className="absolute inset-0 w-full h-full z-20"
            style={{ transformStyle: "preserve-3d", transformOrigin: "left" }}
          >
            {/* FRONT OF COVER */}
            <div
              className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-pink-50 p-5"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="w-full h-full overflow-hidden rounded-xl shadow-inner">
                <img
                  src={albumData[currentIdx].img}
                  alt="Malaika"
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
              </div>
              <p className="font-serif text-xl text-[#ff8fa3] mt-3 italic">
                Tap to Open
              </p>
            </div>

            {/* BACK OF COVER (Left Side when open) */}
            <div
              className="absolute inset-0 w-full h-full bg-[#fffcfc] rounded-2xl shadow-xl flex items-center justify-center rotate-y-180 border-r border-pink-50"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="text-center">
                <span className="text-6xl block mb-2">
                  {albumData[currentIdx].backIcon}
                </span>
                <p className="font-serif text-[#a67c7c] text-lg">My World</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@500;700&display=swap");
        .font-serif {
          font-family: "Dancing Script", cursive;
        }
        .font-sans {
          font-family: "Quicksand", sans-serif;
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-floatUp {
          animation: floatUp linear infinite;
        }
      `}</style>
    </div>
  );
}

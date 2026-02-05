"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function MalaikaEtherealAlbum() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [floatingItems, setFloatingItems] = useState([]);

  const coverRef = useRef(null);
  const cardRef = useRef(null);
  const innerContentRef = useRef(null);
  const glowRef = useRef(null);

  const albumData = [
    {
      img: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=600",
      title: "The Most Beautiful",
      note: "In a world of billions, my eyes only search for you. You are the most beautiful soul I have ever known.",
      backIcon: "🧸",
      color: "#ff8fa3",
    },
    {
      img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=600",
      title: "My Whole Heart",
      note: "Happy Birthday, Malaika! You aren't just in my life; you are my life. Forever isn't long enough with you.",
      backIcon: "💖",
      color: "#ffb7b2",
    },
    {
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600",
      title: "Pure Magic",
      note: "Every time you smile, the world feels brighter. Thank you for being the magic that I need every day.",
      backIcon: "✨",
      color: "#e2bbfd",
    },
  ];

  useEffect(() => {
    const icons = ["🎈", "❤️", "💖", "🧸", "🌸", "✨"];
    const items = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 20 + 20,
      duration: Math.random() * 8 + 10,
    }));
    setFloatingItems(items);
  }, []);

  const toggleCard = () => {
    const isMobile = window.innerWidth < 768;
    const xShift = isMobile ? 25 : 50;

    if (!isOpen) {
      gsap.to(coverRef.current, {
        rotateY: -160,
        duration: 1.5,
        ease: "expo.inOut",
      });
      gsap.to(cardRef.current, {
        x: xShift,
        rotate: -2,
        duration: 1.5,
        ease: "expo.inOut",
      });
      gsap.to(glowRef.current, { opacity: 0.6, scale: 1.2, duration: 1.5 });

      import("canvas-confetti").then((c) =>
        c.default({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: [albumData[currentIdx].color, "#ffffff"],
        }),
      );
    } else {
      gsap.to(coverRef.current, {
        rotateY: 0,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.to(cardRef.current, {
        x: 0,
        rotate: 0,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.to(glowRef.current, { opacity: 0.3, scale: 1, duration: 1.2 });
    }
    setIsOpen(!isOpen);
  };

  const nextMemory = (e) => {
    e.stopPropagation();

    // Smooth transition between memories inside the card
    const tl = gsap.timeline();
    tl.to(innerContentRef.current, {
      opacity: 0,
      y: 10,
      filter: "blur(10px)",
      duration: 0.4,
    })
      .to(coverRef.current, { opacity: 0, duration: 0.3 }, "<")
      .call(() => setCurrentPage())
      .set(innerContentRef.current, { y: -10 })
      .to([innerContentRef.current, coverRef.current], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "back.out(1.7)",
      });
  };

  const setCurrentPage = () => {
    setCurrentIdx((prev) => (prev + 1) % albumData.length);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fffafb] font-sans">
      {/* GLOW AURA */}
      <div
        ref={glowRef}
        className="fixed w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 transition-colors duration-1000"
        style={{ backgroundColor: albumData[currentIdx].color }}
      />

      {/* FLOATING BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingItems.map((item) => (
          <span
            key={item.id}
            className="absolute bottom-[-100px] animate-floatUp opacity-40"
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

      <main className="relative z-10 p-4" style={{ perspective: "2000px" }}>
        <div
          ref={cardRef}
          onClick={toggleCard}
          className="relative w-[290px] h-[440px] sm:w-[350px] sm:h-[500px] cursor-pointer transition-shadow duration-700"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* INSIDE PAGE (Right Side) */}
          <div className="absolute inset-0 w-full h-full bg-white/80 backdrop-blur-md rounded-r-2xl shadow-inner border-l border-white/50 flex flex-col items-center justify-center p-8 text-center">
            <div
              ref={innerContentRef}
              className="flex flex-col items-center w-full"
            >
              <span className="text-pink-200 text-[10px] tracking-[4px] uppercase mb-2 font-bold">
                Chapter {currentIdx + 1}
              </span>
              <h2 className="font-serif text-3xl text-[#a67c7c] mb-4 italic leading-tight">
                {albumData[currentIdx].title}
              </h2>
              <div className="w-10 h-[1px] bg-pink-100 mb-6" />
              <p className="text-[#8b7373] text-sm sm:text-base leading-relaxed mb-8 font-medium">
                "{albumData[currentIdx].note}"
              </p>
              <button
                onClick={nextMemory}
                className="group relative overflow-hidden bg-[#ff8fa3] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all active:scale-95 shadow-lg shadow-pink-200"
              >
                <span className="relative z-10">NEXT MEMORY 🌸</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* FRONT COVER */}
          <div
            ref={coverRef}
            className="absolute inset-0 w-full h-full z-20"
            style={{ transformStyle: "preserve-3d", transformOrigin: "left" }}
          >
            {/* FRONT FACE (The Image) */}
            <div
              className="absolute inset-0 w-full h-full bg-white rounded-r-2xl shadow-2xl flex flex-col items-center justify-center border border-white p-4 sm:p-6"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="w-full h-full overflow-hidden rounded-xl relative group">
                <img
                  src={albumData[currentIdx].img}
                  alt="Malaika"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <h1 className="font-serif text-2xl text-[#ff8fa3] mt-4 italic tracking-wide">
                For Malaika
              </h1>
              <p className="text-[9px] uppercase tracking-[3px] text-gray-300 mt-1 font-bold">
                Touch to Begin
              </p>
            </div>

            {/* BACK FACE (Left Inside) */}
            <div
              className="absolute inset-0 w-full h-full bg-[#fffcfc] rounded-2xl shadow-xl flex flex-col items-center justify-center rotate-y-180 border-r border-pink-50"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="text-center animate-pulse-slow">
                <span className="text-7xl block mb-4 filter drop-shadow-md">
                  {albumData[currentIdx].backIcon}
                </span>
                <p className="font-serif text-[#a67c7c] text-xl">
                  My Whole World
                </p>
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
            opacity: 0.6;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-floatUp {
          animation: floatUp linear infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        div {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}

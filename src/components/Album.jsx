"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MalaikaMagicalBirthday() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [reasonsRevealed, setReasonsRevealed] = useState(false);

  const coverRef = useRef(null);
  const cardRef = useRef(null);
  const bannerTextRef = useRef(null);
  const reasonsRef = useRef(null);
  const giftBoxRef = useRef(null);
  const reasonCardsRef = useRef([]);

  const albumData = [
    {
      img: "/assets/9.jpg",
      title: "Health & Happiness",
      note: "My biggest wish is for you to be happy and healthy every single day, Malaika.",
      backIcon: "🧸",
    },
    {
      img: "/assets/8.jpg",
      title: "Achieving Dreams",
      note: "I hope this year brings you closer to all your dreams and passions.",
      backIcon: "💖",
    },
    {
      img: "/assets/10.gif",
      title: "Endless Love",
      note: "May your year be filled with as much love and joy as you bring to others.",
      backIcon: "✨",
    },
  ];

  // --- 5 REASONS WITH LOCAL ASSETS ---
  const reasons = [
    {
      img: "/assets/1.jpeg",
      title: "Your Kindness",
      desc: "You have a heart of pure gold, treating everyone with gentle love.",
      rotation: "-4deg",
    },
    {
      img: "/assets/2.jpeg",
      title: "Your Laughter",
      desc: "Your laugh is my favorite sound in the whole world, Malaika.",
      rotation: "2deg",
    },
    {
      img: "/assets/3.jpeg",
      title: "Your Brilliance",
      desc: "The way your mind works and how you see the beauty in everything.",
      rotation: "-2deg",
    },
    {
      img: "/assets/4.gif",
      title: "Your Support",
      desc: "You always believe in me, even when I doubt myself.",
      rotation: "4deg",
    },
    {
      img: "/assets/5.gif",
      title: "Your Smile",
      desc: "It lights up my darkest days and makes everything better.",
      rotation: "-3deg",
    },
  ];

  // --- ANIMATIONS ---
  useEffect(() => {
    // 1. Banner Text Animation
    const text = "Happy Birthday, Malaika! ✨";
    const letters = text.split("");
    bannerTextRef.current.innerHTML = "";
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = "0";
      bannerTextRef.current.appendChild(span);
    });

    gsap.to(bannerTextRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  // --- FLOATING ICONS GENERATOR (Per Section) ---
  const FloatingBackground = () => {
    const icons = ["🎈", "❤️", "💖", "🧸", "🌸", "✨"];
    // Generate a unique set of items for each section to make it feel natural
    const items = useMemo(() => {
      return Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        left: Math.random() * 100,
        delay: Math.random() * 10,
        size: Math.random() * 15 + 15,
        duration: Math.random() * 10 + 10,
      }));
    }, []);

    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {items.map((item) => (
          <span
            key={item.id}
            className="absolute bottom-[-50px] animate-floatUp opacity-40"
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
    );
  };

  // --- INTERACTIVE REVEAL ANIMATION ---
  const revealReasons = () => {
    if (reasonsRevealed) return;
    setReasonsRevealed(true);

    const tl = gsap.timeline();

    // 1. Gift box bounces, then shrinks
    tl.to(giftBoxRef.current, { scale: 1.2, duration: 0.2, ease: "power2.in" })
      .to(giftBoxRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.5)",
      })
      .call(() => {
        // Confetti burst
        import("canvas-confetti").then((c) =>
          c.default({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 },
            colors: ["#ff8fa3", "#ffb7b2", "#ff4d6d"],
            shapes: ["heart"],
          }),
        );
      })
      // 2. Cards fly out
      .fromTo(
        reasonCardsRef.current,
        { scale: 0, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
      );
  };

  // --- ALBUM LOGIC ---
  const toggleCard = () => {
    if (!isOpen) {
      gsap.to(coverRef.current, {
        rotateY: -160,
        duration: 1.5,
        ease: "expo.inOut",
      });
      gsap.to(cardRef.current, {
        x: 50,
        z: 50,
        duration: 1.5,
        ease: "expo.inOut",
      });
    } else {
      gsap.to(coverRef.current, {
        rotateY: 0,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.to(cardRef.current, {
        x: 0,
        z: 0,
        duration: 1.2,
        ease: "expo.inOut",
      });
    }
    setIsOpen(!isOpen);
  };

  const nextMemory = (e) => {
    e.stopPropagation();
    const tl = gsap.timeline();
    tl.to(cardRef.current, {
      x: 300,
      opacity: 0,
      rotate: 15,
      duration: 0.4,
      ease: "power2.in",
    })
      .call(() => {
        setIsOpen(false);
        setCurrentIdx((prev) => (prev + 1) % albumData.length);
      })
      .set(coverRef.current, { rotateY: 0 })
      .set(cardRef.current, { x: -300, rotate: -15 })
      .to(cardRef.current, {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
      });
  };

  return (
    <div className="bg-[#fff5f6] font-sans overflow-x-hidden text-[#8b7373]">
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffe4e8_100%)] p-6 relative overflow-hidden">
        <FloatingBackground />
        <h1
          ref={bannerTextRef}
          className="font-serif text-5xl md:text-7xl text-[#ff8fa3] text-center mb-10 leading-tight z-10"
        ></h1>
        <button
          onClick={() =>
            reasonsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-[#ff8fa3] px-10 py-4 rounded-full font-bold text-sm border-2 border-pink-100 hover:bg-pink-50 transition-all shadow-lg active:scale-95 z-10"
        >
          WHY YOU ARE SPECIAL 💖
        </button>
      </section>
      <section
        ref={reasonsRef}
        className="min-h-screen w-full flex flex-col items-center justify-center p-10 bg-[#fff5f6] relative overflow-hidden"
      >
        <FloatingBackground />
        <h2 className="font-serif text-4xl text-[#ff8fa3] mb-16 z-10">
          Reasons I Love You
        </h2>

        {!reasonsRevealed && (
          <div
            ref={giftBoxRef}
            onClick={revealReasons}
            className="cursor-pointer group flex flex-col items-center z-10"
          >
            <div className="text-[10rem] md:text-[15rem] mb-4 group-hover:animate-hoverAndPulse">
              🎁
            </div>
            <p className="text-lg font-bold text-pink-400 animate-pulse">
              Click to reveal!
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-7xl z-10">
          {reasons.map((reason, i) => (
            <div
              key={i}
              ref={(el) => (reasonCardsRef.current[i] = el)}
              className="bg-white p-4 rounded-[2rem] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 hover:rotate-0"
              style={{
                opacity: 0,
                transform: `rotate(${reason.rotation})`,
                width: "280px",
              }}
            >
              <div className="w-full h-64 overflow-hidden rounded-[1.5rem] mb-5">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="font-serif text-2xl mb-2 text-[#ff8fa3]">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8b7373]">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ALBUM SECTION */}
      <section
        id="album-section"
        className="min-h-screen w-full flex items-center justify-center relative p-6 bg-[#fff5f6] overflow-hidden"
      >
        <FloatingBackground />
        <main className="relative z-10" style={{ perspective: "1500px" }}>
          <div
            ref={cardRef}
            onClick={toggleCard}
            className="relative w-[300px] h-[440px] md:w-[350px] md:h-[460px] cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 md:p-8 text-center border-l border-pink-50">
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

            <div
              ref={coverRef}
              className="absolute inset-0 w-full h-full z-20"
              style={{ transformStyle: "preserve-3d", transformOrigin: "left" }}
            >
              <div
                className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-pink-50 p-4 md:p-5"
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
              <div
                className="absolute inset-0 w-full h-full bg-[#fffcfc] rounded-2xl shadow-xl flex items-center justify-center rotate-y-180 border-r border-pink-50"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="text-center">
                  <span className="text-[150px] block mb-2">
                    {albumData[currentIdx].backIcon}
                  </span>
                  {/* <p className="font-serif text-[#a67c7c] text-5xl">My World</p> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* 4. PROMISES SECTION */}
      <section className="min-h-[50vh] w-full flex flex-col items-center justify-center p-10 bg-[#fff5f6] text-center">
        <FloatingBackground />
        <h2 className="font-serif text-4xl text-[#ff8fa3] mb-10 z-10">
          My Promise to You
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed italic mb-10 z-10">
          "For this new year of your life, I promise to celebrate your wins,
          support your dreams, and love you more with every passing day."
        </p>
      </section>

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
        @keyframes hoverAndPulse {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        .animate-hoverAndPulse {
          animation: hoverAndPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

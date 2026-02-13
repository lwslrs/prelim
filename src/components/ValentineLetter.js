import { useEffect, useRef, useState } from "react";

export default function ValentineLetter() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (open) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#4A0E0E] overflow-hidden p-4">
      <audio ref={audioRef} src="/audio/miss-miss.mp3" preload="auto" />
      {/* Animated background hearts and flowers */}
      <div className="bg-heart bg-heart-1">❤️</div>
      <div className="bg-heart bg-heart-2">🌷</div>
      <div className="bg-heart bg-heart-3">💖</div>
      <div className="bg-heart bg-heart-4">🌸</div>
      <div className="bg-heart bg-heart-5">🌹</div>
      <div className="bg-heart bg-heart-6">💕</div>
      <div className="bg-heart bg-heart-7">🌷</div>
      <div className="bg-heart bg-heart-8">💗</div>
      <div className="bg-heart bg-heart-9">🌸</div>
      <div className="bg-heart bg-heart-10">❤️</div>
      <div className="bg-heart sm bg-heart-11">🌼</div>
      <div className="bg-heart md bg-heart-12">💞</div>
      <div className="bg-heart sm bg-heart-13">🌺</div>
      <div className="bg-heart lg bg-heart-14">💖</div>

      <div className="relative z-20 cursor-pointer w-full max-w-[600px] mt-6" onClick={() => setOpen(!open)}>
        {/* Floating hearts */}
        {open && (
          <>
            <span className="heart left-0">❤️</span>
            <span className="heart right-0">🌸</span>
            <span className="heart left-10">💖</span>
          </>
        )}

        {/* Envelope - Same size as letter */}
        <div
          className={`relative w-full aspect-[1.6/1] sm:aspect-[600/380] bg-[#8B4B4B] rounded-b-2xl shadow-2xl transition-all duration-700 ${
            open ? "scale-105" : ""
          }`}
        >
          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 w-0 h-0 border-l-[50%] border-r-[50%] border-b-[50%]
              border-l-transparent border-r-transparent border-b-[#A85959]
              transition-transform duration-700 origin-top
              ${open ? "-rotate-180" : ""}`}
            style={{
              borderLeftWidth: 'calc(50%)',
              borderRightWidth: 'calc(50%)',
              borderBottomWidth: 'calc(50% * 0.63)'
            }}
          />

          {/* Heart seal on envelope */}
          {!open && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#6B2C2C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 border-4 border-[#FDF6E3]">
              <span className="text-4xl sm:text-5xl md:text-6xl">💕</span>
            </div>
          )}

          {/* Letter - Same size as envelope */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-full bg-[#FDF6E3] rounded-xl shadow-2xl transition-all duration-700
              ${open ? "-top-20 sm:-top-32 md:-top-80 opacity-100" : "top-10 sm:top-20 opacity-0"}`}
          >
            {/* Decorative header border */}
            <div className="w-full h-2 md:h-3 bg-gradient-to-r from-[#8B4B4B] via-[#A85959] to-[#8B4B4B]"></div>
            
            {/* Letter content */}
            <div className="p-4 sm:p-6 md:p-8 text-center">
                            {/* Center image area - Couple photo */}
                            <div className="w-56 h-48 bg-gradient-to-b from-[#FDF6E3] to-[#F5E6D3] flex items-center justify-center border-2 border-[#D4AF82] rounded-lg overflow-hidden mx-auto mb-4">
                              <img 
                                src="/images/couple-photo.jpg" 
                                alt="Us" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.innerHTML = '<div class="text-3xl opacity-20">🌹</div>';
                                }}
                              />
                            </div>

              <div className="mb-1 text-xs sm:text-sm tracking-[0.3em] text-[#8B4B4B] font-light uppercase">My Dearest</div>
              <div className="w-12 sm:w-16 h-0.5 bg-[#A85959] mx-auto mb-3 sm:mb-4"></div>
              
              <p className="text-xs sm:text-sm md:text-base text-[#4A0E0E] font-serif leading-relaxed italic mb-2 sm:mb-3">
               Happy Valentines Day, love! 💖
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-[#4A0E0E] font-serif leading-relaxed italic mb-2 sm:mb-3">
                I just want to say thank you always, kasi kahit busy tayo pareho, nagagawan pa rin natin ng paraan mag-communicate—kahit call minsan or konting kwentuhan lang. Kaya kapag kinukwento kita sa mga kasama ko, lagi kitang pinagmamalaki kasi alam ko na sinusuportahan mo ako sa lahat ng gusto ko.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-[#4A0E0E] font-serif leading-relaxed italic mb-2 sm:mb-3">
                Gusto ko lang na i-enjoy natin sa 15 kahit late na tayo mag-date. Importante na makapagpahinga ka, lalo na’t exam day mo. All goods lang talaga. I love you so much.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-[#4A0E0E] font-serif leading-relaxed italic mb-3 sm:mb-4">
                Always remember na kahit gaano tayo ka-busy, ikaw pa rin ang pahinga at tahanan ko. Im always here for you, cheering for you, and loving you every single day. Mahal na mahal kita — ngayon, bukas, at sa lahat ng susunod pang Valentines na magkasama tayo. 💕✨
              </p>
              
              <div className="mt-4 sm:mt-6 mb-3 sm:mb-4">
                <p className="text-[#8B4B4B] font-serif text-base sm:text-lg md:text-xl">Forever Yours</p>
                <div className="mt-2 text-xl sm:text-2xl md:text-3xl">💕</div>
              </div>
            </div>
            
            {/* Decorative footer border */}
            <div className="w-full h-2 md:h-3 bg-gradient-to-r from-[#8B4B4B] via-[#A85959] to-[#8B4B4B]"></div>
          </div>
        </div>

        {!open && (
          <p className="mt-6 sm:mt-8 text-center text-[#D4AF82] animate-pulse text-lg sm:text-xl md:text-2xl font-serif">
            💌
          </p>
        )}

        {!open && (
          <p className="mt-3 sm:mt-4 text-center text-[#A85959] text-sm sm:text-base md:text-lg font-serif tracking-widest">
            FOR SOMEONE SPECIAL
          </p>
        )}

        {open && (
          <p className="mt-6 sm:mt-8 text-center text-[#D4AF82] animate-pulse text-base sm:text-lg md:text-xl font-serif">
            ✨
          </p>
        )}
      </div>
    </div>
  );
}

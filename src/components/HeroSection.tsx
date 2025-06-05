import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative font-sans md:h-[calc(100vh-5rem)] py-20">
      <Image src="/images/nailsalon_bg.png" alt="hero-background" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-200 via-purple-200 via-purple-300 to-purple-400 opacity-90"></div>

      {/* メインコンテンツ */}
      {/* 左側：テキストコンテンツ */}
      <div className="relative z-10 flex flex-col gap-8 items-center">
        {/* ロゴ */}
        <div className="text-center mb-4">
          <div className="w-15 h-15 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <path d="M20,80 Q25,70 40,60 L45,65 Q30,75 25,85 Z" fill="#E91E63" />
              <rect x="40" y="20" width="8" height="40" fill="#333" />
              <ellipse cx="44" cy="18" rx="6" ry="3" fill="#333" />
            </svg>
          </div>
          <h1 className="text-8xl md:text-9xl font-light text-purple-700 mb-0 font-['Dancing_Script'] drop-shadow-md">
            Kotonail
          </h1>
          <p className="text-sm text-purple-600 tracking-[2px] -mt-2">
            NAILSALON
          </p>
        </div>

        {/* 特徴バッジ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/90 rounded-full px-6 py-4 flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-2xl min-w-[30px]">👩‍🎓</div>
            <div className="flex flex-col leading-tight text-sm md:text-lg font-medium">
              <span>学生さん大歓迎</span>

            </div>
          </div>

          <div className="bg-white/90 rounded-full px-6 py-4 flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-2xl min-w-[30px]">🚗</div>
            <div className="flex flex-col leading-tight text-sm md:text-lg font-medium">
              <span>駐車場完備</span>
              
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full px-6 py-4 flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1 animate-pulse">
            <div className="text-2xl min-w-[30px]">🌙</div>
            <div className="flex flex-col leading-tight text-sm md:text-lg font-medium">
              <span>夜22時まで営業中</span>
             
            </div>
          </div>

          <div className="bg-white/90 rounded-full px-6 py-4 flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-2xl min-w-[30px]">⭐</div>
            <div className="flex flex-col leading-tight text-sm md:text-lg font-medium">
              <span>完全個室プライベート</span>
              
            </div>
          </div>
        </div>

        {/* メインキャッチコピー */}
        <div className="text-center my-8">
          <h2 className="mb-4">
            <span className="bg-white/90 text-purple-700 px-6 py-2 rounded-full md:text-lg text-sm font-semibold shadow-md inline-block mb-4">
              車で5分
            </span>
            <br />
            <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
              岐阜大学近く
            </span>
          </h2>
          <p className="text-purple-900 text-lg md:text-xl mt-4 font-medium">
            忙しい社会人も安心！夜遅くまで営業中
          </p>
        </div>


      </div>






    </section>
  );
};

export default HeroSection; 
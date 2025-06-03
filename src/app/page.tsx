"use client"

import Image from "next/image";
import Tel from "@/components/home/Tel";
import Link from "next/link";
import { useState, useEffect } from "react";
import homePc from "../../public/images/home_pc.png";
import homeSv from "../../public/images/home_sv.png";
import { playfairDisplay } from "@/fonts";


export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(true);
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % 7 + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);


  return (
    <>
      {/* 画像セクション */}
      <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
        <Image 
          src={homePc}
          alt="ネイルサロンの写真" 
          fill={true} 
          className="object-fill hidden md:block" 
          priority
          placeholder="blur"
        />
        <Image 
          src={homeSv}
          alt="ネイルサロンの写真" 
          fill={true} 
          className="object-fill block md:hidden" 
          priority
          placeholder="blur"
        />
        {/* 軽いオーバーレイ */}
        
      </section>

      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-pink-100/50 flex items-center justify-center z-100">
            <div className="w-12 h-12 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
          </div>
        )}
        <Image
          src={`/images/nail${currentImageIndex}.jpg`}
          alt="KotoNail サービスイメージ"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-1000 ease-in-out opacity-100"
          onLoad={() => setIsLoading(false)}
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-12 md:py-20">
          <h1 className={`${playfairDisplay.className} text-5xl md:text-7xl font-bold mb-6 text-white`}>
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
              KotoNail
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8"> {/* テキスト色を明るいグレーに変更 */}
            あなたの指先に、最高の美しさを
          </p>
          <p className="text-lg text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"> {/* テキスト色を明るいグレーに変更 */}
            プロフェッショナルなネイルアーティストが、一人ひとりのお客様に合わせた
            オーダーメイドのネイルデザインを提供いたします
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-pink-500 to-sky-300 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ご予約はこちら
            </Link>
            <Link
              href="/gallery"
              className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 border border-pink-200 shadow-md hover:shadow-lg"
            >
              作品ギャラリー
            </Link>
          </div>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section
        className="relative py-20 bg-gradient-to-tl from-[#FEDDDA] to-white"
      >
        {/* 装飾的な要素 */}
        <div className="absolute top-1/8 left-1/8 w-32 h-32 bg-pink-400/60 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/16 right-1/16 w-48 h-48 bg-pink-300/50 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold text-gray-800 mb-6`}> {/* テキスト色を元に戻す */}
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* テキスト色を元に戻す */}
              お客様のライフスタイルに合わせた多彩なネイルサービスをご提供
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-10">
            <Link href="/menu" className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ジェルネイル</h3>
              <p className="text-gray-600 mb-4">
                長持ちで美しいジェルネイル。豊富なカラーバリエーションとデザインをご用意しております。
              </p>
              <p className="text-pink-600 font-semibold">¥5,000〜</p>
            </Link>

            <Link href="/menu" className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">アートデザイン</h3>
              <p className="text-gray-600 mb-4">
                オリジナルのアートデザインで、あなただけの特別なネイルを作成いたします。
              </p>
              <p className="text-sky-600 font-semibold">¥7,000〜</p>
            </Link>

            <Link href="/menu" className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ケア・メンテナンス</h3>
              <p className="text-gray-600 mb-4">
                爪の健康を第一に考えた丁寧なケアとメンテナンスサービス。
              </p>
              <p className="text-cyan-600 font-semibold">¥3,000〜</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold text-gray-800 mb-6`}>
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                Why Choose KotoNail
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-sky-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">完全予約制の個室空間</h3>
                  <p className="text-gray-600">プライベートな空間でリラックスしながら施術をお受けいただけます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">人気店出身ネイリスト</h3>
                  <p className="text-gray-600">名古屋の人気ネイルサロンで多数のお客様を施術してきた経験豊富なスタッフが対応いたします。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">高品質な材料使用</h3>
                  <p className="text-gray-600">安全性と持続性にこだわった高品質な材料のみを使用しています。</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">営業時間</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">月〜金：</span> 10:00 - 22:00</p>
                  <p><span className="font-semibold">土曜日：</span> 10:00 - 22:00</p>
                  <p><span className="font-semibold">日曜日：</span> 10:00 - 22:00</p>
                  <p className="text-pink-600 font-semibold mt-4">定休日：不定休</p>
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-sky-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ※上記は受付時間です<br />
                    完全予約制のため事前予約必須<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 連絡先セクション */}
      <Tel />
    </>
  )
}
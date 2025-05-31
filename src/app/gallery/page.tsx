"use client";

import Link from "next/link";
import { useState } from "react";

export default function Gallery() {
  // サンプルの作品データ
  const artworks = [
    { id: 1, title: "エレガントフレンチ", category: "フレンチ", image: "🌸", description: "上品なピンクのフレンチネイル" },
    { id: 2, title: "3Dフラワーアート", category: "3Dアート", image: "🌺", description: "立体的な花のアート" },
    { id: 3, title: "グラデーション", category: "グラデーション", image: "✨", description: "美しいピンクグラデーション" },
    { id: 4, title: "ストーンアート", category: "アート", image: "💎", description: "スワロフスキーを使った華やかなデザイン" },
    { id: 5, title: "シンプルワンカラー", category: "ワンカラー", image: "💅", description: "オフィスにも適したシンプルなデザイン" },
    { id: 6, title: "ホログラムアート", category: "アート", image: "🌈", description: "キラキラ輝くホログラムネイル" },
    { id: 7, title: "マーブル柄", category: "アート", image: "🎨", description: "大理石風のマーブル模様" },
    { id: 8, title: "ブライダルネイル", category: "ブライダル", image: "👰", description: "特別な日のためのブライダルデザイン" },
  ];

  const categories = ["すべて", "フレンチ", "グラデーション", "ワンカラー", "アート", "3Dアート", "ブライダル"];

  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              ギャラリー
            </span>
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            これまでに手がけた美しいネイルアートの数々
          </p>
        </div>
      </section>

      {/* フィルターバー */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 rounded-full hover:from-pink-100 hover:to-purple-100 transition-all duration-300 border border-pink-200 hover:border-pink-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーグリッド */}
      <section className="py-0 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {artwork.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-pink-600 font-semibold bg-pink-50 px-3 py-1 rounded-full">
                    {artwork.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* インスタグラム連携セクション */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            最新の作品はInstagramでもご覧いただけます
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">@kotonail_official</h3>
            <p className="text-gray-600 mb-6">
              日々の作品や施術風景を投稿しています
            </p>
            <a
              href="https://instagram.com/kotonail_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              フォローする
            </a>
          </div>
        </div>
      </section>

      {/* 技術・こだわりセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                技術へのこだわり
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              美しいネイルアートを生み出すための技術と想い
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">オリジナルデザイン</h3>
              <p className="text-gray-600">
                お客様のイメージを形にするオーダーメイドのデザインを心がけています
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">丁寧な施術</h3>
              <p className="text-gray-600">
                時間をかけて丁寧に仕上げ、持ちの良い美しいネイルを提供いたします
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">高品質な材料</h3>
              <p className="text-gray-600">
                厳選された高品質な材料のみを使用し、安全性と美しさを追求しています
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              あなたも美しいネイルを体験してみませんか
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            お客様のご希望に合わせたオリジナルデザインをご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ご予約・お問い合わせ
            </Link>
            <Link
              href="/menu"
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-pink-200 shadow-md hover:shadow-lg"
            >
              メニューを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 
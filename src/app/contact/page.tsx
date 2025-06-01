"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信の処理をここに実装
    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます。後日ご連絡いたします。");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-sky-50 to-cyan-50">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
              ご予約・お問い合わせ
            </span>
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* フォーム */}
            <div className="bg-gradient-to-br from-pink-50 to-sky-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                  ご予約フォーム
                </span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="山田 花子"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    お電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      ご希望日
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      ご希望時間
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">時間を選択</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望メニュー
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">メニューを選択</option>
                    <option value="ワンカラー">ワンカラー (¥5,000)</option>
                    <option value="グラデーション">グラデーション (¥6,500)</option>
                    <option value="フレンチ">フレンチ (¥6,000)</option>
                    <option value="シンプルアート">シンプルアート (¥7,000)</option>
                    <option value="デラックスアート">デラックスアート (¥10,000)</option>
                    <option value="ベーシックケア">ベーシックケア (¥3,000)</option>
                    <option value="相談">相談して決めたい</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ご要望・ご質問
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="デザインのご希望や気になることがあればお気軽にお書きください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-sky-400 text-white py-4 rounded-xl text-lg font-semibold hover:from-pink-600 hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  送信する
                </button>
              </form>
            </div>

            {/* サロン情報 */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                    サロン情報
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">住所</h4>
                      <p className="text-gray-600">〒501-1174<br />岐阜県岐阜市小野622-6<br /></p>
                    </div>
                  </div>

                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">⏰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">営業時間</h4>
                      <div className="text-gray-600">
                        <p>月〜金：10:00 - 22:00</p>
                        <p>土曜日：10:00 - 22:00</p>
                        <p>日曜日：10:00 - 22:00</p>
                        <p className="text-pink-600 font-semibold mt-2">定休日：不定休</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-pink-50 to-sky-50 p-8 rounded-2xl">
                <h3 id="sns-reservation" className="text-xl font-bold text-gray-800 mb-4">
                  インスタグラム・LINEでのご予約も承ります
                </h3>
                <p className="text-gray-600 mb-6">
                  お急ぎの場合やご質問は、下記SNSにてお気軽にお問い合わせください。
                </p>
                <div className="flex flex-col items-center justify-center gap-4">
                <a
                  href="#instagram-profile"
                  className="inline-block bg-gradient-to-r from-pink-500 to-sky-400 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                >
                  <span role="img" aria-label="Instagram">📸</span> Instagram
                </a>
                <a
                  href="#line-account"
                  className="inline-block bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                >
                  <span role="img" aria-label="LINE">💬</span> 公式LINE
                </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  注意事項
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    完全予約制となっております
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    キャンセルは前日までにお願いします
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    爪の状態により施術時間が変わる場合があります
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセスマップ */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                アクセス
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              岐阜大学から車で約5分
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-sky-100 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">地図はこちらに表示されます</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">バスでお越しの場合</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    岐阜バス「岐阜大学病院」下車
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                    車でお迎えに参ります
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">お車でお越しの場合</h3>
                <p className="text-gray-600">
                  サロンに駐車場がございます。<br />
                  お車でお越しの際は事前にお知らせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
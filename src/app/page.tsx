import Image from "next/image";
import Tel from "@/components/home/Tel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 画像セクション */}
      <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
        <Image 
          src="/images/home_pc.png" 
          alt="ネイルサロンの写真" 
          fill={true} 
          className="object-cover hidden md:block" 
          priority
        />
        <Image 
          src="/images/home_sv.png" 
          alt="ネイルサロンの写真" 
          fill={true} 
          className="object-cover block md:hidden" 
          priority
        />
        {/* 軽いオーバーレイ */}
        
      </section>

      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        {/* 装飾的な要素 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              KotoNail
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8">
            あなたの指先に、最高の美しさを
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            プロフェッショナルなネイルアーティストが、一人ひとりのお客様に合わせた
            オーダーメイドのネイルデザインを提供いたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様のライフスタイルに合わせた多彩なネイルサービスをご提供
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ジェルネイル</h3>
              <p className="text-gray-600 mb-4">
                長持ちで美しいジェルネイル。豊富なカラーバリエーションとデザインをご用意しております。
              </p>
              <p className="text-pink-600 font-semibold">¥5,000〜</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">アートデザイン</h3>
              <p className="text-gray-600 mb-4">
                オリジナルのアートデザインで、あなただけの特別なネイルを作成いたします。
              </p>
              <p className="text-purple-600 font-semibold">¥7,000〜</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ケア・メンテナンス</h3>
              <p className="text-gray-600 mb-4">
                爪の健康を第一に考えた丁寧なケアとメンテナンスサービス。
              </p>
              <p className="text-indigo-600 font-semibold">¥3,000〜</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Why Choose KotoNail
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">完全予約制の個室空間</h3>
                  <p className="text-gray-600">プライベートな空間でリラックスしながら施術をお受けいただけます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">経験豊富なネイリスト</h3>
                  <p className="text-gray-600">10年以上の経験を持つプロフェッショナルが丁寧に施術いたします。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <p><span className="font-semibold">月〜金：</span> 10:00 - 19:00</p>
                  <p><span className="font-semibold">土曜日：</span> 9:00 - 18:00</p>
                  <p><span className="font-semibold">日曜日：</span> 10:00 - 17:00</p>
                  <p className="text-pink-600 font-semibold mt-4">定休日：祝日</p>
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    初回のお客様は30分のカウンセリング込み
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
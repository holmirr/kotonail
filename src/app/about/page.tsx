import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-sky-50 to-cyan-50">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
              セラピスト紹介
            </span>
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            経験豊富なプロフェッショナルがあなたの美しさをサポート
          </p>
        </div>
      </section>

      {/* メインセラピスト紹介 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-pink-200 to-sky-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-6xl">👩‍💼</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="px-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">原　琴音</h2>
                <p className="text-lg text-pink-600 font-semibold">代表・ネイリスト</p>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed px-10">
                <p>
                  ネイル業界で経験を積み、名古屋の人気ネイルサロンで技術を磨いてまいりました。
                  お客様一人ひとりの個性とライフスタイルに合わせたオーダーメイドのデザインをご提案いたします。
                </p>
                <p>
                  「美しさは指先から始まる」をモットーに、丁寧な技術はもちろんのこと、
                  お客様との対話を大切にし、心からリラックスしていただける空間作りに努めています。
                </p>
                <p>
                  定期的に最新の技術研修を受講し、常にトレンドを取り入れた
                  高品質なサービスを提供することをお約束いたします。
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-sky-50 p-6 rounded-2xl px-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">経歴</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    名古屋の人気ネイルサロンにて研鑽を積む
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                    お客様のニーズに応える技術力を習得
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    トレンドを取り入れたデザイン提案力
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    丁寧なカウンセリングと技術力
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サロンの特徴 */}
      <section className="py-20 px-10 bg-gradient-to-r from-pink-50 to-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                サロンの特徴
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              お客様に最高の体験をお届けするための取り組み
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">プライベート空間</h3>
              <p className="text-gray-600 text-center">
                完全個室でゆったりとした時間をお過ごしいただけます。他のお客様を気にすることなく、リラックスした雰囲気の中で施術を受けていただけます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">オーダーメイドデザイン</h3>
              <p className="text-gray-600 text-center">
                お客様のお好みやライフスタイルに合わせて、世界に一つだけのオリジナルデザインをご提案いたします。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">高品質な材料</h3>
              <p className="text-gray-600 text-center">
                お肌に優しく、長持ちする高品質な材料のみを厳選して使用。安心・安全にご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-white px-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
              お気軽にご相談ください
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            ネイルに関するご質問やご要望など、どんなことでもお気軽にお声がけください。
            お客様のご希望に合わせた最適なプランをご提案させていただきます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-64 bg-gradient-to-r from-pink-500 to-sky-300 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ご予約・お問い合わせ
            </Link>
            <Link
              href="/gallery"
              className="w-64 bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-pink-200 shadow-md hover:shadow-lg"
            >
              作品を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 
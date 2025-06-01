import Link from "next/link";

export default function Menu() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-sky-50 to-cyan-50">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
              メニュー・料金
            </span>
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            お客様のニーズに合わせた多彩なメニューをご用意
          </p>
        </div>
      </section>

      {/* ジェルネイルメニュー */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                ジェルネイル
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              美しさと持続性を兼ね備えたジェルネイル
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            <div className="bg-gradient-to-br from-pink-50 to-sky-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ワンカラー</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  シンプルで上品な単色仕上げ。オフィスワークにも最適です。
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-pink-600">¥5,000</span>
                  <p className="text-sm text-gray-500 mt-2">約90分</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">グラデーション</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  美しいグラデーションで指先を上品に演出します。
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-sky-600">¥6,500</span>
                  <p className="text-sm text-gray-500 mt-2">約110分</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌸</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">フレンチ</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  クラシックなフレンチスタイルで清楚で上品な仕上がり。
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-cyan-600">¥6,000</span>
                  <p className="text-sm text-gray-500 mt-2">約100分</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アートデザインメニュー */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-sky-50 px-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                アートデザイン
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              あなただけのオリジナルデザイン
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">シンプルアート</h3>
                <p className="text-gray-600 mb-4">
                  ストーンやホログラムを使った上品なアート
                </p>
                <span className="text-3xl font-bold text-pink-600">¥7,000</span>
                <p className="text-sm text-gray-500 mt-2">約120分</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  ストーン・パール使用
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  ホログラム・ラメ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  シンプルなライン・ドット
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👑</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">デラックスアート</h3>
                <p className="text-gray-600 mb-4">
                  3Dアートや手描きデザインを駆使したプレミアムメニュー
                </p>
                <span className="text-3xl font-bold text-sky-600">¥10,000</span>
                <p className="text-sm text-gray-500 mt-2">約150分</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  3Dフラワー・リボン
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  手描きアート
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  スワロフスキー使用
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ケア・メンテナンス */}
      <section className="py-20 bg-white px-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                ケア・メンテナンス
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              爪の健康を第一に考えた丁寧なケア
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-sky-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💆‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ベーシックケア</h3>
              <p className="text-gray-600 mb-4">
                爪の形を整え、甘皮処理を行う基本ケア
              </p>
              <span className="text-2xl font-bold text-pink-600">¥3,000</span>
              <p className="text-sm text-gray-500 mt-2">約60分</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ジェルオフ</h3>
              <p className="text-gray-600 mb-4">
                他店で施術されたジェルの除去も承ります
              </p>
              <span className="text-2xl font-bold text-sky-600">¥2,000</span>
              <p className="text-sm text-gray-500 mt-2">約45分</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ハンドケア</h3>
              <p className="text-gray-600 mb-4">
                ハンドマッサージで手全体をリラックス
              </p>
              <span className="text-2xl font-bold text-cyan-600">¥4,000</span>
              <p className="text-sm text-gray-500 mt-2">約75分</p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金に関する注意事項 */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
                料金について
              </span>
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>表示価格は全て税込み価格です</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>初回のお客様は初回料金として¥500をいただいております</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>爪の状態により追加料金が発生する場合がございます</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>デザインによっては追加料金をいただく場合がございます</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>お支払いは現金・クレジットカード・電子マネーに対応しています</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">
              ご予約お待ちしております
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            お気軽にお電話またはオンラインでご予約ください
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-sky-300 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ご予約・お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
} 
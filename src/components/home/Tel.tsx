export default function Tel() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
      <div className="lg:max-w-6xl md:max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 md:text-3xl text-xl sm:text-2xl">
          お気軽にフォロー・ご予約ください
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-0">
          {/* 公式LINE */}
          <div className="-m-4 bg-white/30 backdrop-blur-md rounded-full aspect-square md:w-80 md:h-80 w-72 h-72 flex flex-col items-center justify-center shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-400/30 rounded-full flex items-center justify-center border border-green-300/40 shadow-lg">
                <span className="text-3xl">💬</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">公式LINE</h3>
            <p className="text-gray-700 text-sm text-center px-4 mb-3">
              最新情報をお届け！<br/>
              気軽にメッセージしてね
            </p>
            <button className="bg-green-500/80 hover:bg-green-600/80 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
              友だち追加
            </button>
          </div>

          {/* Instagram */}
          <div className="-m-4 bg-white/30 backdrop-blur-md rounded-full aspect-square md:w-80 md:h-80 w-72 h-72 flex flex-col items-center justify-center shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center border border-purple-300/40 shadow-lg">
                <span className="text-3xl">📸</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
            <p className="text-gray-700 text-sm text-center px-4 mb-3">
              作品ギャラリーを<br/>
              チェックしてね
            </p>
            <button className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80 text-white px-6 py-2 rounded-full text-sm font-bold transition-all">
              フォロー
            </button>
          </div>

          {/* TikTok */}
          <div className="-m-4 bg-white/30 backdrop-blur-md rounded-full aspect-square md:w-80 md:h-80 w-72 h-72 flex flex-col items-center justify-center shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border border-gray-400/40 shadow-lg">
                <span className="text-3xl">🎵</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">TikTok</h3>
            <p className="text-gray-700 text-sm text-center px-4 mb-3">
              ネイルアートの<br/>
              プロセス動画配信中
            </p>
            <button className="bg-black/80 hover:bg-black/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
              フォロー
            </button>
          </div>

          {/* ウェブ予約 */}
          <div className="-m-4 bg-white/30 backdrop-blur-md rounded-full aspect-square md:w-80 md:h-80 w-72 h-72 flex flex-col items-center justify-center shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-400/30 rounded-full flex items-center justify-center border border-blue-300/40 shadow-lg">
                <span className="text-3xl">📅</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ウェブ予約</h3>
            <p className="text-gray-700 text-sm text-center px-4 mb-3">
              24時間いつでも<br/>
              簡単予約
            </p>
            <button className="bg-blue-500/80 hover:bg-blue-600/80 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
              予約する
            </button>
          </div>
        </div>

        <div className="mt-12 mx-auto w-96 h-20 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/30 flex items-center justify-center">
          <p className="text-gray-800 text-sm">
            💅 KotoNail で美しい指先を手に入れよう ✨
          </p>
        </div>

      </div>
    </section>
  );
}
export default function Tel() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            お気軽にお問い合わせください
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* 電話番号セクション */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-md">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">お電話でのご予約</h3>
              <a 
                href="tel:09012345678"
                className="text-2xl md:text-3xl font-bold text-white hover:text-pink-200 transition-colors duration-300 block"
              >
                090-1234-5678
              </a>
              <p className="text-white/80 text-sm mt-2">受付時間：10:00〜18:00</p>
            </div>
            
            {/* 予約制の案内 */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-md">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">完全予約制</h3>
              <p className="text-white/90 text-lg">
                事前のご予約をお願いしております
              </p>
              <p className="text-white/80 text-sm mt-2">
                当日予約も可能な場合があります
              </p>
            </div>
          </div>
          
          {/* LINEやオンライン予約の案内 */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">LINE予約</h4>
              <p className="text-white/80 text-sm">
                24時間受付中！気軽にメッセージをお送りください
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">オンライン予約</h4>
              <p className="text-white/80 text-sm">
                ウェブサイトから簡単予約！空き状況も確認できます
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-xl">
            <p className="text-white/90 text-sm">
              ※キャンセルは前日までにご連絡ください
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
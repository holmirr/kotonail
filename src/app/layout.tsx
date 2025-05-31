import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "KotoNail - 美しいネイルサロン | プロフェッショナルなネイルアート",
  description: "KotoNailは、プロフェッショナルなネイルアーティストが一人ひとりのお客様に合わせたオーダーメイドのネイルデザインを提供する完全予約制のネイルサロンです。",
  keywords: "ネイルサロン, ジェルネイル, ネイルアート, 美容, KotoNail",
  openGraph: {
    title: "KotoNail - 美しいネイルサロン",
    description: "あなたの指先に、最高の美しさを。プロフェッショナルなネイルアーティストが丁寧に施術いたします。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="fixed top-0 left-0 w-full h-16 z-50">
          <Header />
        </header>
        <main className="mt-20">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* サロン情報 */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    KotoNail
                  </span>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  あなたの指先に最高の美しさを提供するプロフェッショナルなネイルサロンです。
                  一人ひとりのお客様に合わせたオーダーメイドのデザインで、
                  特別な時間をお過ごしください。
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📍</span>
                  </div>
                </div>
              </div>
              
              {/* メニュー */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-pink-300">メニュー</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/" className="hover:text-pink-300 transition-colors duration-300">ホーム</a></li>
                  <li><a href="/about" className="hover:text-pink-300 transition-colors duration-300">サロンについて</a></li>
                  <li><a href="/menu" className="hover:text-pink-300 transition-colors duration-300">メニュー・料金</a></li>
                  <li><a href="/gallery" className="hover:text-pink-300 transition-colors duration-300">ギャラリー</a></li>
                  <li><a href="/contact" className="hover:text-pink-300 transition-colors duration-300">ご予約・お問い合わせ</a></li>
                </ul>
              </div>
              
              {/* サロン情報 */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-300">サロン情報</h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div>
                    <p className="font-semibold text-white">営業時間</p>
                    <p>月〜金：10:00-19:00</p>
                    <p>土曜日：9:00-18:00</p>
                    <p>日曜日：10:00-17:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">定休日</p>
                    <p>祝日</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">電話番号</p>
                    <a href="tel:09012345678" className="hover:text-pink-300 transition-colors duration-300">
                      090-1234-5678
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 KotoNail. All rights reserved. | 
                <span className="text-pink-300"> 完全予約制ネイルサロン</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

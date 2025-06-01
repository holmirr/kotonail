import { Inter } from 'next/font/google'
import { Parisienne } from 'next/font/google'
import { Dancing_Script } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] })
export const parisienne = Parisienne({ subsets: ['latin'], weight: '400' })
export const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '400' })

export const playfairDisplay = Playfair_Display({
  weight: ['400', '700'], // 必要に応じてウェイトを選択
  subsets: ['latin'],
  style: ['normal', 'italic'], // イタリックも利用可能
  display: 'swap',
});
// 適用例: className={`... ${playfairDisplay.className}`}

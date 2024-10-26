// import Image from "next/image";
import { Rock_Salt } from "next/font/google"

const rock_salt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="bg-stripe-pattern justify-center items-center h-screen">
      <header className="flex flex-col">
        <div className={`${rock_salt.className} text-center`}>
          <span style={{ fontSize: '100pt' }}>Okiku</span>
        </div>
      
        <div className="text-center">
          文字数/単語数カウントツール
        </div>
      </header>
    </div>
  );
}

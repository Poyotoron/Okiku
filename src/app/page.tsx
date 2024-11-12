"use client";

import Image from "next/image";
import { Rock_Salt } from "next/font/google";
import { useState } from "react";

import { countChar } from "./counter";

const rock_salt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
})

type CharFormData = {
  text: string;
  includeSpace: boolean;
};

function CharForm() {
  const [formData, setFormData] = useState<CharFormData>({
    text: "",
    includeSpace: true,
  });
  const [numChar, setNumChar] = useState(0);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }
    setFormData(newFormData);
    setNumChar(await countChar(newFormData));
  };

  return (
    <div className="text-center">
      <form>
        <label className="items-center space-x-2">
          <input
            type="checkbox"
            name="includeSpace"
            checked={formData.includeSpace}
            onChange={handleChange}
          />
          <span>空白文字 (スペース、改行等) を1文字とカウントする</span>
        </label>
        <div className="mt-4">
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            style={{ borderColor: 'black', borderWidth: '1px', width: '60%', height: '200px' }}
          />
        </div>
      </form>

      <p> 文字数: {numChar} </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-stripe-pattern justify-center items-center h-screen">
      <header className="flex flex-col">
        <div className={`${rock_salt.className} text-center`}>
          <span style={{ fontSize: '100pt', userSelect: 'none' }}>Okiku</span>
        </div>
      
        <div className="text-center">
          文字数/単語数カウントツール
        </div>
      </header>

      <hr className="my-8 border-t-4 border-gray-300" />

      <main className="flex flex-col">
        <div>
          <div className="text-center">
            <h2>文字数カウント</h2>
          </div>
          
          <div>
            <CharForm />
          </div>
        </div>

        <hr className="my-8 border-t-2 border-gray-300" />

        <div>
          <div className="text-center">
            <h2>単語数カウント</h2>
          </div>
          工事中……
        </div>
      </main>

      <hr className="my-8 border-t-4 border-gray-300" />

      <footer className="flex flex-col">
        <div className="flex justify-center items-center mt-4 space-x-4">
          <a href="https://twitter.com/PyTr_N" target="_blank" rel="noopener noreferrer">
            <Image src="/logo_twitter_black.png" alt="Twitter Logo" width={32} height={32} />
          </a>
          <a href="https://github.com/Poyotoron/Okiku" target="_blank" rel="noopener noreferrer">
            <Image src="/logo_github.svg" alt="GitHub Logo" width={32} height={32} />
          </a>
        </div>
      </footer>
    </div>
  );
}

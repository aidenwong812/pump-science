'use client'

import Main from "./component/Main";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="bg-[url('/background-bg.png')] fixed inset-0 w-full h-full object-cover z-0">
      <Header />
      <Main />
    </div>

  );
}

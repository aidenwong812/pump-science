import Link from "next/link";
const Header = () => (
    <div className="w-full flex items-center gap-4 justify-center top-0 left-0 right-0 h-16">
        <img src="/clouds-header.png" alt="clouds" className="absolute w-full top-0 left-0" />
        <h1 className="flex items-center justify-center text-[28px] font-bold max-w-max bg-[#0A0C19] bg-opacity-40 hover:bg-opacity-100 transition-all duration-300 px-5 py-3 h-auto border-[1px] border-t-0 border-[#CAC7F714]">
            <Link href="/" style={{ textShadow: '0 0 8px hsla(0,0%,100%,.8)' }}>&lt;&lt; PUMP SCIENCE &gt;&gt;</Link>
        </h1>
    </div>
)
export default Header;
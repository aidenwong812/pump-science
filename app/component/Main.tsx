import Link from "next/link";
import Card from "./Card";

const Main = () => {
    const buttons = [
        {
            title: "Join on Telegram",
            image: "/button-image/tg-icon.svg",
            link: "https://t.me/pump_science"
        },
        {
            title: "HOW IT WORMS?",
            image: "/button-image/qu-icon.svg",
            link: ""
        },
        {
            title: "Request new experiment",
            image: "/button-image/plus-icon.svg",
            link: "https://moleculeprotocol.typeform.com/to/MUNHeFJd#source=pump+science+app"
        },
    ]
    const button2 = [
        "Live •2 🟢", "Upcoming •0", "All •2"
    ]
    const Cards = [
        { title: "Rifampicin", unit: "$RIF", amount: "$ 156,010,686", percent: "11.01%", image: "/Rifampicin.gif" },
        { title: "Urolithin A", unit: "$URO", amount: "$ 70,013,228", percent: "11.01%", image: "/Urolithin.gif" },
    ]
    return (
        <div className="relative z-10 w-full h-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center ">
                <div className="w-full flex flex-col-reverse items-center justify-center gap-4 text-xl top-40">
                    <div className="w-full md:w-auto flex items-center justify-between rounded-lg p-2 bg-black gap-2 border border-white/[0.1]">
                        {
                            button2.map(button => (
                                <button key={button} className="font-fontBit uppercase text-lg font-bold flex items-center justify-center rounded-md py-[10px] px-3 md:px-6 opacity-40 hover:opacity-100 hover:bg-brand-light 
                        hover:shadow-custom-inset-both hover:text-black hover:px-6 transition-all ease-in-out bg-brand-light hover:bg-[#A0A8DC]">
                                    {button}
                                </button>
                            ))
                        }
                    </div>
                    <div className="flex items-center px-4 md:px-0 gap-4 py-2">
                        {buttons.map(button => (
                            <Link key={button.title} href={button.link} target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center group gap-2 group-hover:gap-4  transition-all  cursor-pointer bg-black/[0.5] p-2 rounded-md border border-white/[0.05]">
                                <img src={button.image} alt="tg-icon" className="size-5" />
                                <span className="text-[#CAC7F7] uppercase font-medium group-hover:underline transition-all ">
                                    {button.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-7 w-full container mx-auto px-2">
                    {Cards.map(card => (
                        <Card key={card.title} title={card.title} unit={card.unit} amount={card.amount} percent={card.percent} image={card.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Main;
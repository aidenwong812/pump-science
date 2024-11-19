const Card = ({ title, unit, amount, percent, image }: { title: string, unit: string, amount: string, percent: string, image: string }) => {
    const icons = [
        { source: "/card-image/icon1.svg", title: "icon1", },
        { source: "/card-image/icon2.svg", title: "icon2", },
        { source: "/card-image/icon3.svg", title: "icon3", },
    ]
    return (
        <div className="flex bg-[#0A0C19] group transition-all  ease-in-out flex-col items-start justify-start cursor-pointer p-2 rounded-lg bg-brand-bg  backdrop-blur-sm w-full">
            <div className="w-full !h-40 flex flex-col items-center justify-center overflow-y-auto relative">
                <div className="flex flex-col items-end gap-2 absolute top-4 right-4">
                    {icons.map(icon => (
                        <div key={icon.title} className="w-10 h-10 rounded-full flex items-center justify-center p-1 bg-gray-800 opacity-50">
                            <img src={icon.source} alt={icon.title} className="size-6" />
                        </div>
                    ))}
                </div>
                <img
                    alt="$URO" loading="lazy" width="400" height="200" decoding="async" data-nimg="1"
                    className="w-full object-fit rounded-lg opacity-100 h-40 bg-transparent"
                    src={image}
                />
            </div>
            <div className="w-full flex flex-col items-start justify-start font-fontBit">
                <h3
                    className="text-2xl md:text-3xl xl:text-4xl  px-2 flex items-center justify-between w-full border-b border-b-white border-opacity-10 py-2">
                    <span className="capitalize w-[75%] truncate">{title}</span><span
                        className="opacity-[58%] text-brand-main text-2xl md:text-3xl xl:text-4xl ">{unit}</span></h3>
                <div className="w-full flex items-center justify-between bg-brand-bg rounded-md p-2">
                    <div className="flex flex-col items-start justify-start"><span className="text-2xl md:text-3xl xl:text-4xl">
                        {amount}</span><span className="uppercase text-lg opacity-50">Marketcap</span>
                    </div>
                    <div className="flex flex-col items-end justify-end "><span
                        className="text-2xl md:text-3xl xl:text-4xl text-green-500">{percent}</span>
                        <span className="uppercase text-lg opacity-50">COMPLETED</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
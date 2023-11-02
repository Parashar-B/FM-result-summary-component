import data from '../data/data.json'

export default function SummarySection(){

    const colorArr = [
        {
            bg: 'bg-[#fcf2f2]',
            text: 'text-[#ff5757]'
        },
        {
            bg:'bg-[#fff6e6]',
            text:'text-[#ffb833]'
        },
        {
            bg:'bg-[#e6fff9]',
            text:'text-[#00bd91]'
        },
        {
            bg:'bg-[#ebf1ff]',
            text: 'text-[#1125d4]'
        }
    ]

    console.log(data)

    return(
        <div className="md:w-[50%] h-[500px] md:h-full py-[1rem] px-[2rem] rounded-[30px]">
            <div className=" h-[15%] flex items-center">
                <h1 className="text-[20px] font-bold tracking-wider">Summary</h1>
            </div>
            <div className=" h-[55%] flex flex-col justify-center">
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className={`h-[60px] flex items-center my-[0.4rem] rounded-lg px-[1rem] ${colorArr[index].bg}`}>  
                                <div className=" w-[12%] flex">
                                    <img
                                        alt='img'
                                        src={item.icon}

                                    />
                                </div>
                                <div className={` w-[55%] font-semibold tracking-wide ${colorArr[index].text}`}>
                                    {item.category}
                                </div>
                                <div className=" w-[33%] text-right font-semibold">
                                    <span>{item.score}</span>
                                    <span className="text-gray-500"> / 100</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-[30%] flex items-center justify-center">
                <button className="bg-[#303b5a] w-full h-[50px] text-white rounded-full tracking-wide">Continue</button>
            </div>
        </div>
    )
}
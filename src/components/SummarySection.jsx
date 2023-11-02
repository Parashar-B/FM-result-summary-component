import data from '../data/data.json'

export default function SummarySection(){

    const colorArr = [
        {
            bg: 'bg-[#ffe6e6]',
            text: 'text-[#ff5757]'
        },
        {
            bg:'#fff6e6',
            text:'#ffb833'
        },
        {
            bg:'#33ffcf',
            text:'#00bd91'
        },
        {
            bg:'#ebf1ff',
            text: '#c8c7ff'
        }
    ]

    console.log(data)

    return(
        <div className="w-[50%] h-full py-[1rem] px-[2rem] rounded-[30px]">
            <div className=" h-[15%] flex items-center">
                <h1 className="text-[20px] font-semibold tracking-wider">Summary</h1>
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
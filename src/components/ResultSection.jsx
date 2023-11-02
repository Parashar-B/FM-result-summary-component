export default function ResultSection(){
    return(
        <div className="md:w-[50%] h-[400px] md:h-full bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-bl-[30px] rounded-br-[30px] md:rounded-[30px] py-[1rem]">
            <div className="h-[15%] flex items-center justify-center ">
                <h1 className="text-gray-300 font-semibold text-[20px] tracking-wider">Your Result</h1>
            </div>
            <div className="h-[45%] flex justify-center items-center">
                <div className="bg-gradient-to-b from-[#4e21ca] to-[#2421ca01] w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full">
                    <div className="h-[70%] flex items-end justify-center">
                        <h1 className="text-white font-bold text-[60px] md:text-[75px] h-fit">76</h1>
                    </div>
                    <div className=" h-[30%]  flex justify-center relative">
                        <h1 className="text-gray-400 font-semibold text-[15px] md:text-[18px] absolute top-[-15px]">of 100</h1>
                    </div>
                </div>
            </div>
            <div className="h-[15%] flex justify-center items-center">
                <h1 className="text-white font-semibold text-[30px] tracking-wider">Great</h1>
            </div>
            <div className="h-[25%] flex justify-center">
                <h1 className="w-[65%] text-gray-300 text-[15px] text-center tracking-wider">You scored higher than 65% of the people who have taken these tests.</h1>
            </div>
        </div>
    )
}
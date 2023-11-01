import ResultSection from "./ResultSection";
import SummarySection from "./SummarySection";

export default function ResultSummary(){
    return(
        <div className="flex justify-center items-center h-[100vh]">
            <div className="w-[45rem] h-[32rem] flex bg-white rounded-[30px] drop-shadow-2xl">
                <ResultSection/>
                <SummarySection/>
            </div>
        </div>
    )
}
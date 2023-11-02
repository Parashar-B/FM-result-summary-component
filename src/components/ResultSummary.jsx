import ResultSection from "./ResultSection";
import SummarySection from "./SummarySection";

export default function ResultSummary(){
    return(
        <div className="flex justify-center items-center h-[100vh] font-hankenG">
            <div className="w-[45rem] h-[31rem] flex rounded-[30px] shadow-[10px_20px_50px_-15px_#cce6ff]">
                <ResultSection/>
                <SummarySection/>
            </div>
        </div>
    )
}
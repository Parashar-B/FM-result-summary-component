import ResultSection from "./ResultSection";
import SummarySection from "./SummarySection";

export default function ResultSummary(){
    return(
        <div className="flex justify-center items-center md:h-[100vh] font-hankenG">
            <div className="w-full md:w-[45rem] md:h-[31rem] flex max-md:flex-col md:rounded-[30px] md:shadow-[10px_20px_50px_-15px_#cce6ff]">
                <ResultSection/>
                <SummarySection/>
            </div>
        </div>
    )
}
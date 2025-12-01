import { FirstParagraph } from "../components/aboutuspage/firstparagraph";
import { WhyChoose } from "../components/aboutuspage/whychoose";
import { InfoCard } from "../components/aboutuspage/infocard";
import { QuestionAndAnswer } from "../components/aboutuspage/Q&A";

export function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 font-sans">
            <div className="max-w-6xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
                <FirstParagraph/>
                <InfoCard/>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-10 mb-16 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                    <p className="text-xl leading-relaxed text-center">
                        To make transportation in Tunisia more accessible, efficient, and user-friendly by connecting travelers with the best mobility options available. We believe everyone deserves easy access to reliable transportation information.
                    </p>
                </div>
                <WhyChoose/>
                <QuestionAndAnswer/>
            </div>
        </div>
    )
}
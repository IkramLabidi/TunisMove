import { QuestionCard } from "./questions"
export function QuestionAndAnswer(){
    return(
        <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <div className="bg-white rounded-xl shadow-lg p-8 divide-y divide-gray-200">
                        <div className="py-4">
                            <QuestionCard 
                                question="How do I find transportation options?"
                                answer="Simply enter your starting point and destination on our homepage. We'll show you all available transport options including buses, shared taxis, and private transport with real-time pricing and schedules."    
                            />
                        </div>
                        <div className="py-4">
                            <QuestionCard
                                question="Is the pricing information accurate?"
                                answer="We work directly with transport operators to provide the most up-to-date pricing. However, prices may vary based on demand, season, and specific routes. We recommend confirming with the operator before traveling."
                            />
                        </div>
                        <div className="py-4">
                            <QuestionCard
                                question="Can I book tickets through TunisMove?"
                                answer="Currently, we provide information and contact details for transport operators. Direct booking functionality is coming soon. For now, you can call the operators directly using the contact information provided."
                            />
                        </div>
                        <div className="py-4">
                            <QuestionCard
                                question="How often is the schedule information updated?"
                                answer="We update schedule information daily and work with operators to provide real-time updates for delays and changes. You can also enable notifications to stay informed about your favorite routes."
                            />
                        </div>
                        <div className="py-4">
                            <QuestionCard
                                question="How do I report incorrect information?"
                                answer="If you notice any incorrect information, please contact us through the support form below or email us at support@tunismove.tn. We appreciate user feedback to keep our platform accurate."
                            />
                        </div>
                    </div>
                </div>
    )
}
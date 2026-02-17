import {Container} from "@/components/shared/container";
import {QuestionBox} from "@/components/shared/questionBox";

const questions = [
    {
        question: "Wie viele Grammys gewann die Band Queen zu ihren Lebzeiten?",
        answer: "Offiziell gewann die Band Queen 0 Grammys",
        image: "/queen.png",
    },
    {
        question: "Wie alt wurde Bob Marley?",
        answer: "Bob Marley wurde 36 Jahre alt",
        image: "/bob_marley.png",
    },
    {
        question: "Wie heißt die Freundin von John Lennon?",
        answer: "John Lennons Lebensgefährtin heißt Yoko Ono",
        image: "/beatles.png",
    },
    {
        question: "Wie hieß die Popgruppe der ersten Staffel von Popstars?",
        answer: "Die erste Popstars Popgruppe hieß No Angels",
        image: "/popstars.png",
    },
]

export default function Home() {
    return (
        <Container>
            <div className="mb-20">
                <h1 className="text-3xl font-bold">Startseite</h1>

                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:gap-20">
                    {questions.map((question, index) => (
                        <QuestionBox questions={question} key={index} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

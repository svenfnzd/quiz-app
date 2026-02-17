"use client";

import {useState} from "react";
import Image from "next/image";

import {Bookmark} from "feather-icons-react";

export function QuestionBox(question: any) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    return (
        <div
            className="bg-linear-to-t from-cyan-700 to-blue-500 p-6 rounded-3xl flex flex-col gap-6 relative text-white text-center border-4 shadow-lg"
        >
            <div className="grid grid-cols-1 grid-rows-[56px_auto_56px_44px] gap-4">
                <div className="flex items-center justify-center">
                    <h1 className="text-xl font-bold">
                        {question.questions.question}
                    </h1>

                    <button
                        onClick={() => setBookmark(!bookmark)}
                        className="absolute cursor-pointer -top-3.75 right-6.25 rounded-lg h-10 w-10 flex items-center justify-center"
                    >
                        <Bookmark className={`stroke-red-700 hover:fill-red-700  transition-colors duration-300 ease-in-out ${bookmark ? 'fill-red-700' : 'fill-none'}`} size={40} />
                    </button>
                </div>


                <div className="flex aspect-video overflow-hidden rounded-xl">
                    <Image
                        className="w-full h-full object-cover object-center"
                        src={question.questions.image}
                        alt={question.questions.question}
                        width={600}
                        height={400}
                        loading="eager"
                    />
                </div>

                <div className="flex items-center justify-center">
                    {showAnswer && (
                        <span className="text-xl font-bold">
                            {question.questions.answer}
                        </span>
                    )}
                </div>

                <button onClick={() => setShowAnswer(!showAnswer)}
                        className="bg-linear-to-t from-[#666666] to-[#4b4b4b] transition-colors duration-300 ease text-white rounded-3xl flex items-center justify-center p-2 border-2 border-white cursor-pointer"
                >
                    {showAnswer ? "Hide Answer" : "Show Answer"}
                </button>
            </div>
        </div>
    );
}
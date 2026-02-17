import {Container} from "@/components/shared/container";

export function Header() {
    return (
        <header className="sticky top-0 inset-x-0 bg-linear-to-r from-cyan-500 to-blue-500 h-14">
            <Container>
                <h1 className="text-4xl text-white text-center">Sven's Music Quiz</h1>
            </Container>
        </header>
    )
}
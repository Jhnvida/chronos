import { Content } from "./components/Content";
import { Heading } from "./components/Heading";
import { Navbar } from "./components/Navbar";
import { Timer } from "./components/Timer";

function App() {
    return (
        <>
            <Navbar />

            <Content>
                <Heading title="Início" subtitle="Trabalhe com intenção, descanse com propósito." />
                <Timer />
            </Content>
        </>
    );
}

export { App };

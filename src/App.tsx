import { Content } from "./components/Content";
import { Heading } from "./components/Heading";
import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import { Timer } from "./components/Timer";

function App() {
    return (
        <>
            <Navbar />

            <Content>
                <Heading title="Início" subtitle="Trabalhe com intenção, descanse com propósito." />
                <Timer />
                <List />
            </Content>
        </>
    );
}

export { App };

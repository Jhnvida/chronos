import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Timer } from "./components/Timer";
import { List } from "./components/List";

export function App() {
    return (
        <>
            <Navbar />

            <Content>
                <Timer />
                <List />
            </Content>
        </>
    );
}

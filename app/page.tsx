import { Asteroids } from "./Asteroids";
import { Cart } from "./Cart";
import { Header } from "./Header";

export default function Home() {
    return (
        <div className="app">
            <Header />
            <Asteroids />
            <Cart />
        </div>
    );
}

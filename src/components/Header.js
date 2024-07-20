import trollImage from "../images/troll.png"

export default function Header() {
    return (
        <header>
            <img src={trollImage} alt="Troll" className="header--image"></img>
            <h1 className="header--title">Meme Generator</h1>
            <h3 className="header--project">React Course - Project 5</h3>
        </header>
    )
}
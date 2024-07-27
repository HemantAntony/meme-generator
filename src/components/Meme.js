import React from "react"

export default function Meme() {

    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const defaultTopText = "Shut up"
    const defaultBottomText = "and take my money"

    const [ allMemes, setAllMemes ] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            setAllMemes(data.data.memes)
        })
    }, [])


    function getMemeImage() {
        const index = Math.floor(Math.random() * allMemes.length)
        const { url } = allMemes[index]
        setMeme(oldMeme => ({
            ...oldMeme,
            randomImage: url
        }))
    }

    function textfieldChanged(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder={defaultTopText}
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={textfieldChanged}
                />
                <input
                    type="text"
                    placeholder={defaultBottomText}
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={textfieldChanged}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme--image"></img>
                <h2 className="meme--text top">{meme.topText === "" ?  defaultTopText : meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText === "" ?  defaultBottomText : meme.bottomText}</h2>
            </div>
        </main>
    )
}
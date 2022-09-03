import React from "react";
import "./Main.css"
import memesData from "./memesData.js"
export default function Main(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/261o3j.jpg"})

    const [allMemes, setAllMemes] = React.useState([])    
    

    
    React.useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


    function getMemeImage(event){
        event.preventDefault()
        let num = Math.floor(Math.random()*100)
        var url=allMemes[num].url
        setMeme({...meme, randomImage: url})
    }
    function handleChange(event){
        setMeme((prevData)=>{
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }


    return(
        <div className="main">
            <form className="form">
                <div className="text-input">
                    <input
                    type="text"
                    placeholder="Top-Text"
                    className="top-text"
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                    />
                    <input
                    type="text"
                    placeholder="Bottom-Text"
                    className="bottom-text"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                    />
                </div>
                <button onClick={getMemeImage} className="btn">Click to get an image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
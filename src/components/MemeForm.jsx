import React from "react";
import { ReactDOM } from "react-dom";
// import MemesData from "../memes"
import MemesData from "../get_memes"

export default function MemeForm() {
    // let url = "https://i.imgflip.com/3xctnx.jpg";
    // const [generatedImageUrl, setgeneratedImageUrl] = React.useState(url);
    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImage: "https:\/\/i.imgflip.com\/3lmzyx.jpg"
        }
    );
    const [allmemes, setAllmemes] = React.useState([])
    
    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data=>setAllmemes(data.data.memes))

        // const response = await fetch("https://api.imgflip.com/get_memes")
        // const data = await response.json()
        // setAllmemes(data.data.memes)
    }, [])
    
    console.log(allmemes)
    function generateNewMeme(event) {
        event.preventDefault();
        // const memesArray = MemesData.memes;
        console.log(allmemes)

        const randomNumber = Math.floor(Math.random() * allmemes.length) //to get a random index of the data array
        const url = allmemes[randomNumber].url 

        // setgeneratedImageUrl(url)
        setMeme(prevData => {
            return {...prevData, randomImage: url}
        })

    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme( prevMeme => ({...prevMeme, [name]: value}))
    }


    return (

            <form className="meme-form">
                <label htmlFor='top-text' className="top-text-label">
                    <span>Top Text</span>
                    <input type="text" id="top-text" name="topText" onChange={handleChange}/>
                </label>
                <label htmlFor='bottom-text' className="bottom-text-label">
                    <span>Bottom Text</span>
                    <input type="text" id="bottom-text" name="bottomText" onChange={handleChange}/>
                </label>
                <button type="submit" value="submit" className="generate-meme-button" onClick={generateNewMeme}>Get a new meme image</button>
            <div className="meme">
                <img src={meme.randomImage} className="generated-meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            </form>

    )
}
 

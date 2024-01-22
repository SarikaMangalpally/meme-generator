import React from "react";
import { ReactDOM } from "react-dom";
import MemesData from "../memes"

export default function MemeForm() {
    // let url = "https://i.imgflip.com/3xctnx.jpg";
    // const [generatedImageUrl, setgeneratedImageUrl] = React.useState(url);
    const [memeData, setMemeData] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImage: ""
        }
    );
    
    function generateNewMeme(event) {
        event.preventDefault();
        const memesArray = MemesData.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length) //to get a random index of the data array
        // console.log(randomNumber)
        const url = memesArray[randomNumber].image_url 
        // setgeneratedImageUrl(url)
        setMemeData(prevData => {
            return {...prevData, randomImage: url}
        })

    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMemeData( prevMeme => ({...prevMeme, [name]: value}))
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
                <img src={memeData.randomImage} className="generated-meme-image"/>
                <h2 className="meme-text top">{memeData.topText}</h2>
                <h2 className="meme-text bottom">{memeData.bottomText}</h2>
            </div>
            </form>

    )
}

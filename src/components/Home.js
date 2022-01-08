import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=3`

    let [value, setValue] = React.useState("");
    const [isLoaded, setIsLoaded] = React.useState(false);

    const [liked, setLike] = React.useState(false);

    const toggleLike = () => {
        setLike(!liked);
        console.log("click")
    };

    async function getPhotos() {
        let response = await fetch(NASA_API_URL)
        let result = await response.json();
        let data = result.map((nasaData) => {
            return (
                <div class="cardView" style={{ maxWidth: "50vw", minWidth: "360px", padding: 0 }}>
                    <img src={nasaData.url} style={{ maxWidth: "50vw", minWidth: "360px" }} />
                    <div style={{ padding: 20 }}>
                        <div style={{ color: 'black', fontWeight: 600, fontSize: 20 }}>{nasaData.title}
                        </div>
                        <p>
                            {nasaData.explanation}
                        </p>
                        <a style={{ fontSize: "40px" }}>
                            <i onClick={toggleLike()} class={liked ? 'bi bi-suit-heart-fill' : 'bi bi-suit-heart'}></i>
                        </a>
                    </div>
                </div>
            )
        })
        setValue(data);
    }

    React.useEffect(() => {
        getPhotos();
        setIsLoaded(true);
    }, [isLoaded]);

    return (
        <div className='mainContainer'>
            <div className='photoCardLayout'>
                <div className='photoCardContainer'>
                    {value}
                </div>
            </div>
            <div className='panelEnd'>
                sort by date<br></br>
                from date to date<br></br>
                or select count<br></br>

            </div>
        </div>
    )
}

export default Home

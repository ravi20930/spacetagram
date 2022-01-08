import React from 'react'

function Home() {

    const NASA_API_URL =`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=6`

    let [value, setValue] = React.useState("");
    const [isLoaded, setIsLoaded] = React.useState(false);

    async function getPhotos() {
        let response = await fetch(NASA_API_URL)
        let result = await response.json();
        console.log(result)
        let data = result.map((nasaData) => {
            return (
                <div class="cardView" style={{ maxWidth: 350, maxHeight: 600, padding: 0 }}>
                    <img src={nasaData.url} style={{ maxWidth: 350, maxHeight: 300 }} />
                    <div style={{ padding: 20 }}>
                        <div style={{ color: 'black', fontWeight: 600, fontSize: 20 }}>{nasaData.title}</div>
                        <p>
                            {nasaData.explanation}
                        </p>
                        <a style={{ fontWeight: 500 }} href={nasaData.url}>Read more</a>
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
        </div>
    )
}

export default Home

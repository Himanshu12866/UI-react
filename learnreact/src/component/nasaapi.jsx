import { useEffect, useState } from "react";

import axios from "axios";

export default function NASAapi() {
    const [data, setData] = useState({
        photos: [
            {
                id: 0,
                camera: {
                    id: 0,
                    name: "",
                    rover_id: ""
                },
                img_src: "",
                earth_day: ""
            }
        ]
    })
    function LoadAPI() {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Qg7owYx0a8F2ygq22v4wJVCAcZOQZ86Wl18uZebd")
            .then(repsonse => repsonse.data)
            .then(data => {
                setData(data)
                console.log(data)
            })
    }
    useEffect(() => {
        LoadAPI();
        console.log(LoadAPI())
    }, [])

    return (
        <div>
            {
                data.photos.map((photo, index) =>
                    <div key={index} className="d-flex flex-wrap">
                        <div className="card w-25">
                            <div>
                                <img className="card-img-top" src={photo.img_src}></img>
                            </div>
                            <div className="card-header">{photo.id}</div>
                            <div className="card-body">
                                {
                                    photo.camera.map((id, index) =>
                                        <div key={index}>
                                            <p>{id.id}</p>
                                            <p>{id.name}</p>
                                            <p>{id.rover_id}</p>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card-footer">
                                <p>{photo.earth_day}</p>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    )
}
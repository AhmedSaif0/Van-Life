import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { HashLoader } from "react-spinners"


export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState([])
    
//param its string  ":1"
    const param = params.id[1]
    useEffect(() => {
        axios.get(`/api/vans/${param}`).then((response) => {
            setVan(response.data.vans);
        });
      }, [param]);
      
    return (
        <div className="van-detail-container container">
            {van.length != 1 ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />

                    <div className="detail">
                   <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                   </div>
                </div>
            ) : (<h2><HashLoader color="#FF8C38" style={{alignContent:'center', alignItems:'center', height: '200px'}}/></h2>)
            }
        </div>
    )
}




import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'

const HostVansDetails = () => {
  const params = useParams();

  const [van, setVan] = useState(null)
 
  const paramid = params.id
  useEffect( () => {
    fetch(`/api/host/vans/${paramid}`)
    .then(res => res.json())
    .then(data => 
      setVan(data.vans))
  },[])

// display the van image, name, price, type




      if (!van) {
                 return <h1>Loading...</h1>
          }

  return (
   
           
    <>
      <div className='hostvanDetail' key={van.id}>
      <div>
         <img src={van.imageUrl}/> 
            <h1>{van.name}</h1>
            <h3>${van.price}</h3>
            <i class={`van-type ${van.type} selected`} >{van.type}</i>
          </div>
      </div>
    </>

  )
}

export default HostVansDetails



// import React, { useEffect, useState } from 'react'
// import { useParams } from "react-router-dom"

// export default function HostVansDetails() {

//     /**
//      * Challenge (not optional!): build the shared UI portion of the
//      * Host Van Detail page. This is
//      * 
//      * Optional portion: also style it to look like the design.
//      * 
//      * For now, get the data from a request to `/api/host/vans/:id`
//      * and display the van image, name, price, type
//      */
//     const { id } = useParams()
//     const [currentVan, setCurrentVan] = useState(null)

//     useEffect(() => {
//         fetch(`/api/host/vans/${id}`)
//             .then(res => res.json())
//             .then(data => setCurrentVan(data.vans))
//     }, [])
    
//     if (!currentVan) {
//         return <h1>Loading...</h1>
//     }

//     return (
//         <div>
//             <img src={currentVan.imageUrl} width={150} />
//             <h2>{currentVan.name}</h2>
//             <p>{currentVan.price}</p>
//             <p>{currentVan.type}</p>
//         </div>
//     )
// }

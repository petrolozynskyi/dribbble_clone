import React, { useEffect, useState } from 'react'
import { mockshots } from '../../api/shots.api/shots.api'

export default function expdesigns.thumbnail() {
    const [dots, setDots] = useState([])

    useEffect(() => {
        const fetchDots = async () => {
            try {
                const response = await fetch(`http://${API}/images/shots`, {
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:5173",
                    },
                    mode: 'no-cors',
                    method: 'GET'

                })
                const result = await response.json()
                console.log("Success:", result);
            }
            catch (error) {
                const data = mockshots
                setDots(data)
            }
        }
        fetchDots()
    }, [])



    return (
        <div className='w-[273px] relative h-[340px] rounded-[32px]'>
            {[mockshots].map((shot, index) => (
                <div>
                    <img src={shot.imageSrc} alt={shot.name} />
                    <p>{shot.name}</p>
                </div>
            ))}
        </div>
    )
}

import { useEffect, useState } from 'react';
import { mockshots } from '../../api/shots.api/shots.api';
import Shot from '../dot/Shot';

export function Expdesigns() {
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
        <>
            <div className='pb-[150px]'>
                <h2 className='block text-center mb-[48px] text-[48px]'>Explore inspiring designs</h2>
                <div className='grid px-[72px] justify-center gap-[36px] grid-cols-4'>
                    {[...dots, ...dots, ...dots, ...dots].map((shot, index) => (
                        <Shot key={index} views={shot.views} num={index} imageSrc={shot.imageSrc} likes={shot.likes} name={shot.name} />
                    ))}
                </div>
                <div className='flex justify-center mt-[48px]'>
                    <a className='flex justify-center hover:cursor-pointer w-[210px] font-semibold border-[1px] border-solid border-black nowrap rounded-full h-[56px] text-center items-center text-[14px]'>Browse more inspiration</a>
                </div>
            </div>
        </>
    )
}
{/* <div className='flex rounded-xl  flex-col justify-center' key={index}>
                    <img className='rounded-xl justify-center' src={shot.imageSrc} alt={shot.name} />
                    <div className='flex mt-2 items-center justify-between'>

                        <div className='flex items-center'>
                            <img className='w-[24px] rounded-full h-[24px]' src={shot.imageSrc} />
                            <div className='text-[14px] font-medium ml-2'>{faker.person.fullName()}</div>
                        </div>
                        <div className='flex items-center justify-end'>
                            <Likebtn />
                            <div className='text-[14px] font-medium ml-2'>{faker.number.int(10000)}</div>
                        </div>
                    </div>
                </div> */}
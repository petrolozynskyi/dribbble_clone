import { motion } from 'framer-motion'

export default function HeroCard({ imageSrc, name, position }) {

    return (
        <div className='w-[273px] relative h-[340px] rounded-[32px]'>
            <img className='rounded-[2rem] overflow-hidden object-cover' alt={imageSrc} src={imageSrc} />
            <p className='absolute text-white text-sm font-semibold bottom-[50px] p-2 left-[15px]'> {name}</p>
            <div className='absolute flex bottom-2 p-2 left-3'>
                {position.map((position, key) => (
                    <p key={key} className='text-white  bottom-2 p-2 m-1 border border-solid text-[11px] font-bold rounded-full border-white border-opacity-20 left-3'> {position}</p>
                ))}
            </div>
        </div>
    )
}
{/* <p className='absolute text-white bottom-2 p-2 border border-solid text-[11px] font-bold rounded-full border-white border-opacity-20 left-3'> {position}{name}</p> */ }
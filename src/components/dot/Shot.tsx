import { useState } from 'react';



export default function Shot({ imageSrc, name, num, likes, views }) {

    const [clicked, setClicked] = useState(() => {
        const storedValue = localStorage.getItem(`${name}+ '${num}'`);
        console.log(storedValue)
        return storedValue ? JSON.parse(storedValue) : false;
    });
    const setClickedKey = `${name}+ '${num}'`; // Define the key for localStorage

    const handleClick = () => {
        setClicked(prevClicked => {
            const newClicked = !prevClicked;
            localStorage.setItem(setClickedKey, newClicked); // Use the defined key
            return newClicked;

        });
    };



    return (
        <div className='flex rounded-xl  flex-col cursor-pointer justify-center'>
            <img className='rounded-xl justify-center' src={imageSrc} alt={name} />
            <div className='flex mt-2 items-center justify-between'>

                <div className='flex items-center'>
                    <img className='w-[24px] rounded-full h-[24px]' src={imageSrc} />
                    <div className='text-[14px] font-medium ml-2'>{name}</div>
                </div>
                <div className='flex items-center justify-end'>
                    <div>
                        <svg onClick={handleClick} className={`text-[#9e9ea7] hover:text-[#ea64d9] transition-all cursor-pointer icon fill-current ${clicked ? 'text-[#ea64d9]' : 'text-[#9e9ea7]'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img">
                            <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div className='text-[14px] text-[#3d3d4e] font-medium ml-2 mr-2'>{likes}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon text-[#9e9ea7] fill-current shot-tools-icon">
                        <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                    </svg>
                    <div className='text-[14px] text-[#3d3d4e]  font-medium ml-2'>{views}</div>
                </div>
            </div>
        </div>

    )
}

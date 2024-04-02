import React, { useEffect, useState } from "react";
import HeroCard from "./hero-track-card";
import { mockheroes } from "../../api/heroes.api/heroes.api";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export function HeroTrack() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://example.com/profile", {
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:5173",

                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    mode: "no-cors",
                    method: "GET",
                });

                const result = await response.json();
                console.log("Success:", result);
            } catch (error) {
                const data = mockheroes;
                setHeroes(data);
            }
        };

        fetchData();
    }, []);

    const xTranslation = useMotionValue(0);

    let [ref, { width }] = useMeasure();

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 14;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 45,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return () => controls.stop;
    }, [xTranslation, width]);

    return (
        <>
            <div className="inline-flex overflow-hidden h-[484px]">
                <motion.div
                    className="left-0 py-[72px] absolute flex overflow-hidden gap-7"
                    ref={ref}
                    style={{ x: xTranslation }}
                >

                    {[...heroes, ...heroes].map((hero, index) => (

                        <HeroCard
                            key={index}
                            imageSrc={hero.imageSrc}
                            name={hero.name}
                            position={hero.position}
                        />

                    ))}

                </motion.div>
            </div>
        </>
    );
}

// https://www.youtube.com/watch?v=Ot4nZ6UjJLE

// import React, { useEffect, useState } from 'react';
// import HeroCard from './hero-track-card';
// import { mockheroes } from '../../api/heroes.api/heroes.api';

// export function HeroTrack() {
//     const [heroes, setHeroes] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://example.com/profile", {
//                     method: 'GET',
//                 });

//                 const result = await response.json();
//                 console.log("Success:", result);
//             } catch (error) {
//                 const data = mockheroes;
//                 setHeroes(data);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='slider-top flex absolute overflow-x-hidden gap-7'>
//             {[...heroes, ...heroes, ...heroes, ...heroes, ...heroes, ...heroes, ...heroes, ...heroes, ...heroes, ...heroes].map((hero, index) => (
//                 <HeroCard
//                     key={index}
//                     name={hero.name}
//                     imageSrc={hero.imageSrc}
//                     position={hero.position}
//                 />
//             ))}
//         </div>
//     );
// }

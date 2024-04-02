import { animate, useMotionValue, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { FooterCard } from "../../components/footer-card/footer.card";
import { mockshots } from "../../api/shots.api/shots.api";

export default function FooterAnimation() {
    const [dots, setDots] = useState([]);

    const DEFAULT_DURATION = 45;
    const INFINITY_DURATION = 1000000;

    const [duration, setDuration] = useState(DEFAULT_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const fetchDots = async () => {
            try {
                const response = await fetch(`http://${API}/images/shots`, {
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:5173",
                    },
                });

                setDots(data);
            } catch (error) {
                const data = mockshots;
                setDots(data);
            }
        };
        fetchDots();
    });

    const xTranslation = useMotionValue(0);

    let [ref, { width }] = useMeasure();

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 14;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return () => controls.stop;
    }, [xTranslation, width, duration, rerender]);

    return (
        <motion.div
            className="xyu left-0 my-[72px] absolute flex overflow-hidden gap-7"
            onHoverStart={() => {
                setMustFinish(true);
                setDuration(INFINITY_DURATION);
            }}
            onHoverEnd={() => {
                setMustFinish(true);
                setDuration(DEFAULT_DURATION);
            }}
            ref={ref}
            style={{ x: xTranslation }}
        >
            {[...dots, ...dots].map((shot, index) => (
                <FooterCard key={index} imageSrc={shot.imageSrc} name={shot.name} />
            ))}
        </motion.div>
    );
}

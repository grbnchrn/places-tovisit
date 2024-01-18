import { useEffect, useState } from "react";
const TIMER = 3000;

export default function ProgressBar() {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const interTimer = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearTimeout(interTimer);
        };
    }, []);

    return <progress value={remainingTime} max={TIMER}></progress>;
}

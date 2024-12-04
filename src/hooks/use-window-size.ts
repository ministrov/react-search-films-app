import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({
        width: 0,
        height: 0
    });

    useEffect(() => {
        function handletResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener('resize', handletResize);
        handletResize();

        return () => window.removeEventListener('resize', handletResize);
    }, []);

    return windowSize;
}

export default useWindowSize;
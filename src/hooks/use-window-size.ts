import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{ width: number | undefined, height: number | undefined }>({
        width: undefined,
        height: undefined
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
import { useEffect, useState } from 'react';

const useScroll = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            
            setIsScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isScrolling; 
};

export default useScroll;

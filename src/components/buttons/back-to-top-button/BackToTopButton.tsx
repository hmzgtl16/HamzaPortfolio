'use client'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {animateScroll, Events, scroller} from 'react-scroll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 500)
    }

    const options = {
        duration: 1500,
        delay: 100,
        smooth: 'easeInOutQuint',
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop(options)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const jumpAnimation = {
        y: [0, -10, 0, -10, 0],
        transition: {
            y: {
                duration: 0.7,
                ease: 'easeOut',
                repeat: 1,
            },
        },
    }

    return (

        <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8}}
            transition={{duration: 0.4}}
            className="fixed bottom-10 right-10 z-50"
        >
            {isVisible && (
                <motion.button
                    whileHover={jumpAnimation}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="bg-foreground text-background rounded-full size-12"
                >
                    <FontAwesomeIcon icon={faArrowUp} size='xl'/>
                </motion.button>
            )}
        </motion.div>
    )
}

export default BackToTopButton


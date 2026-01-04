'use client'
import {useState, useEffect} from 'react'
import { motion, AnimatePresence } from "motion/react"
import {animateScroll} from 'react-scroll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const SCROLL_THRESHOLD = 500

function BackToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const options = {
        duration: 1500,
        delay: 100,
        smooth: 'easeInOutQuint',
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop(options)
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    whileHover={{
                        y: [0, -10, 0],
                        transition: { duration: 0.6, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="
            fixed bottom-10 right-10 z-50
            size-12 rounded-full
            bg-foreground text-background
            flex items-center justify-center
            shadow-lg
          "
                >
                    <FontAwesomeIcon icon={faArrowUp} size="lg" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default BackToTopButton


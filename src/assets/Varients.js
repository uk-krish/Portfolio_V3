export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            y: direction === "up" ? 0 : direction === "down" ? 10 : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type:"spring",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
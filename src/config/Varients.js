export const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
            ease: "easeOut",
        },
    },
};

export const Common = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
    },
};

export const cardvaritent = {
    offscreen: { opacity: 0, y: -50 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        },
    },
}
export const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.5 }
    },
};
export const GetNav = (id) => {
    return {
        hidden: { marginTop: -100 },
        visible: {
            marginTop: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                delay: 0.1 * id - 0.05,
            }
        }
    }
}
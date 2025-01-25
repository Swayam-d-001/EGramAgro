export const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }
  
  export const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.2 },
  }
  
  export const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  
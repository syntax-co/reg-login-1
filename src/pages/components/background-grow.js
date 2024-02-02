

import { motion } from "framer-motion";


const BackgroundGrow = ({selected}) => {
    return (
        <div className="w-full h-full absolute overflow-hidden
            flex items-center justify-center rounded-lg"
            >

            <motion.div 
            className="w-1 h-1 bg-lightCoral rounded-full
            absolute"
            style={{
                zIndex:selected? 2:0
            }}
            initial={{
                width:'0%',
                height:'0%'
            }}
            animate={{
                width: selected? '150%':'0%',
                height:selected? '150%':'0%'
            }}
            transition={{
                delay: selected? 0:.5,
                duration: selected? .3:0
            }}
            />

            <motion.div 
            className="w-1 h-1 bg-lapisLazuli rounded-full
            absolute"
            style={{
                zIndex:!selected? 2:0
            }}
            initial={{
                width:'0%',
                height:'0%'
            }}
            animate={{
                width: !selected? '150%':'0%',
                height:!selected? '150%':'0%'
            }}
            transition={{
                delay: !selected? 0:.5,
                duration: !selected? .3:0
            }}
            />

        </div>
    );
}
 
export default BackgroundGrow;
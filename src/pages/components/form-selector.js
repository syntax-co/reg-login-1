import { motion } from "framer-motion";
import { useState } from "react";




const FormSelector = ({selected,setSelected}) => {

    const [hovering,setHovering] = useState([0,0]);

    return (
        <div className="form-selector-main-browser font-primary"
        >

            
            <motion.div className="w-full h-1/3 flex items-center mt-3 mb-2
            bg-center bg-contain relative cursor-pointer"
            style={{
                backgroundImage:'url(./images/blue-tab.png)',
                backgroundSize:'100% 100%'
            }}

            onClick={() => {
                setSelected(0)
            }}
            onMouseEnter={() => setHovering([1,0])}
            onMouseLeave={() => setHovering([0,0])}
            >
                
                <div className="text-2xl absolute w-[200%] 
                grid place-items-center"
                style={{
                    rotate:'-90deg',
                    transform:'translatey(-25px)'
                }}
                >
                    Sign-In
                </div>


                <motion.div className="w-full h-full absolute"
                style={{
                    backgroundImage:'url(./images/transparent-tab.png)',
                    backgroundSize:'100% 100%'
                }}
                initial={{opacity:0}}
                animate={{
                    opacity:hovering[0]? 1:0 
                }}
                />


            </motion.div>

            <div className="w-full h-1/3 flex items-center mb-2
            bg-center bg-contain relative cursor-pointer"
            style={{
                backgroundImage:'url(./images/coral-tab.png)',
                backgroundSize:'100% 100%'
            }}
            onClick={() => {
                setSelected(1)
            }}
            >

                <div className="text-2xl absolute w-[200%] 
                grid place-items-center"
                style={{
                    rotate:'-90deg',
                    transform:'translatey(-25px)'
                }}
                >
                    Register
                </div>

                <motion.div className="w-full h-full absolute"
                style={{
                    backgroundImage:'url(./images/transparent-tab.png)',
                    backgroundSize:'100% 100%'
                }}

                initial={{opacity:0}}
                animate={{
                    opacity:hovering[1]? 1:0 
                }}

                onMouseEnter={() => setHovering([0,1])}
                onMouseLeave={() => setHovering([0,0])}
                />

            </div>


        </div>
    );
}
 
export default FormSelector;
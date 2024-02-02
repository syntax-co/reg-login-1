import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";




const ReqTile = ({label,status}) => {


    

    return(
        <div className="w-5/6 h-12 my-auto rounded-full  py-auto px-[2px]
        flex items-center"
        >

            <div className="ml-10 text-white font-primary text-xl"
            >
                {label}
            </div>

            <div className="w-8 h-8 rounded-full ml-auto bg-[#ffffff88]
            flex items-center justify-center"
            >
                <AnimatePresence >
                    {
                        status? 
                        <motion.div className="absolute"
                        initial={{opacity:0}}
                        animate={{
                            opacity:status? 1:0
                        }}
                        >
                            <IoCheckmark 
                            size={30}
                            color="#00ff15"
                            />
                        </motion.div>:
                    
                        <motion.div className="absolute"
                        initial={{opacity:0}}
                        animate={{
                            opacity:!status? 1:0
                        }}
                        >
                            <IoClose 
                            size={30}
                            color="#ff1919"
                            />
                        </motion.div>
                    }
                    
                </AnimatePresence>
                

            </div>

        </div>
    )
}


const RequirementPanel = ({reqs}) => {

    const [hovering,setHovering] = useState(false);
    const [show,setShow] = useState(false);

    return (
        <motion.div className="w-full bottom-[-85%] h-[95%] flex flex-col items-center absolute z-10
        font-primary"
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                transition:{
                    type:'spring',
                    damping:'20',
                    duration:.5,
                    when:'afterChildren'
                }
            }}
            exit={{opacity:0}}
            >

                


                <div className="w-full h-16 flex items-center justify-center cursor-pointer"
                onClick={() => {setShow(true)}}
                >
                    
                    <div className="h-4/6 w-4/6 rounded-full bg-lapisLazuli
                    flex items-center justify-center text-white text-lg"
                    style={{
                        boxShadow:'inset 3px 3px 10px #00000055'
                    }}
                    >
                        Password Requirements
                    </div>

                </div>


                <motion.div className="w-[90%] h-full my-auto rounded-lg bg-lapisLazuli
                flex items-start justify-center absolute"

                initial={{
                    top:'20%',
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    top:show? '-60%':'20%',
                    transition:{
                        type:'spring',
                        damping:'20',
                        duration:.5,
                    }
                }} 
                >

                    <motion.div className=" left-5 top-3 cursor-pointer absolute"
                    
                    whileHover={{
                        rotate:'90deg'
                    }}

                    onClick={() => {setShow(!show)}}
                    >
                        <IoClose 
                        color="white"
                        size={40}
                        />
                    </motion.div>

                    <div className="w-[90%] h-[60%] mt-10 mr-0
                    flex flex-col items-center"
                    >

                        <ReqTile 
                        label={'Capital Letters'}
                        status={reqs[0]}
                        />

                        <ReqTile 
                        label={'Lowercase Characters'}
                        status={reqs[1]}
                        />

                        <ReqTile 
                        label={'Numbers'}
                        status={reqs[2]}
                        />

                        <ReqTile 
                        label={'Special Characters'}
                        status={reqs[3]}
                        />

                        <ReqTile 
                        label={'12 or more characters'}
                        status={reqs[4]}
                        />

                        <ReqTile 
                        label={'Passwords Match'}
                        status={reqs[5]}
                        />



                    </div>

                </motion.div>


            </motion.div>
    );
}
 
export default RequirementPanel;
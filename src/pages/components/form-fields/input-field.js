import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoCheckmark, IoClose } from "react-icons/io5";




const UserField = ({label,ident,register=false}) => {

    // if register is true then the component
    // should check the database if the username
    // is valid
    

    const [usable,setUsable] = useState(2);
    
    const isAvailable = async(newValue) => {

        let results;

        if (newValue) {
            if (newValue.length > 10) {
                // api endpoint
                const endpoint = '';

                console.log(newValue);

                const data = {  
                    username:newValue
                }

                const options = {
                    method:'POST',
                    header: {
                        'Conent-Type':'application/json'
                    },
                    data:JSON.stringify(data)
                }

                const response = await fetch(endpoint,options);
                // response.json()
                const _response = {
                    usable:true
                }
                results = _response;                
            }
        }
        



        if (results) {
            if (results.usable) {
                setUsable(1);
            }
        } 
        else if(newValue == '') {
            setUsable(2);
        }else {
            setUsable(0);
        }



    }


    return (
        <div className="w-5/6 h-fit my-auto 
        rounded-full"
        >

            <div className="ml-6"
            >
                {
                    label&& label
                }
            </div>

            <div className="h-10 border border-smokeWhite rounded-full flex
            p-[2px]"
            
            >
                <div className="w-[34px] h-[34px] bg-lightCoral rounded-full
                flex items-center justify-center pr-[1px]"
                style={{
                    background:register? '#1C5D99':'#EF767A'
                }}
                >
                    <CiUser 
                    color="white"
                    size={25}
                    />
                </div>

                <input className="ml-2 w-4/6 "
                type="text"
                onChange={(event) => {
                    if (register) {
                        isAvailable(event.target.value);
                    }
                }}
                />

                <AnimatePresence >
                {
                    usable != 2 &&
                    <motion.div key='username-status' className="w-[34px] h-[34px] bg-[#ffffff88] rounded-full
                    flex items-center justify-center pr-[1px] ml-auto"
                    
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    exit={{
                        opacity:0
                    }}
                    >
    
                        {
                            usable==0? <IoClose size={25} color="#ff1919" />:
                            usable==1? <IoCheckmark size={25} color="#00ff15"/>:
                            ''
                        }
    
                    </motion.div>
                }
                </AnimatePresence>
                

            </div>
            

        </div>
    );
}
 
export default UserField;
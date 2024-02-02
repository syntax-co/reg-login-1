
import { MdOpacity, MdOutlinePassword } from "react-icons/md";
import { BiShowAlt,BiHide } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";


 
const PasswordField = ({
    label,
    ident,
    register=false,
    regData,
    primary=false,
    reqs,
    setReqs
}) => {

    // if register is true then the component

    const [matching,setMatching] = useState(2);



    const checkStrength = (value) => {
        
        const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        const holder = reqs.slice(0) //holds 
        
        console.log(holder)

        // check for capital letters
        if (/[A-Z]/.test(value)) {
            holder[0]=1;
        } else {
            holder[0]=0;
        }

        // check for lowercase letters
        // console.log(/[a-z]/.test(value))
        if (/[a-z]/.test(value)) {
            holder[1]=1;
        } else {
            holder[1]=0;
        }

        
        // check for numbers
        if (/\d/.test(value)) {
            holder[2]=1;
        } else {
            holder[2]=0;
        }

        // checkf or special characters
        if (specialChars.test(value)) {
            holder[3]=1;
        } else {
            holder[3]=0;
        }

        // 12 or more characters
        
        if (value.length >= 12) {
            holder[4]=1;
        } else {
            holder[4]=0; 
        }


        // set new states
        setReqs(holder);

    }

    const checkMatch = () => {
        
        
        const items = document.querySelectorAll('#'+ident+'-input');

        
        const cState = reqs.slice(0);

        console.log(items[0].value== items[1].value)

        // match logic
        if (items[0].value == items[1].value) {
            setMatching(true);
            cState[5]=1;
        } 
        
        else {
            setMatching(false);
            cState[5]=0;
        }
        

        setReqs(cState);
        
        

    }

    
    const [show,setShow] = useState(false);


    return (
        <div id={ident} 
        className="w-5/6 h-12 mt-2 my-auto
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
                <div className="w-[34px] h-[34px]  rounded-full
                flex items-center justify-center"
                style={{
                    background:register? '#1C5D99':'#EF767A'
                }}
                >
                    <div>
                        <MdOutlinePassword 
                        color="white"
                        size={25}
                        />
                    </div>
                </div>

                <input id={ident+'-input'} 
                className="w-4/6  ml-2 mr-auto"
                type={show? 'text':'password'}
                onChange={(event) => {
                    if (register) {
                        if (!primary) {
                            checkMatch();
                        } else {
                            checkStrength(event.target.value);
                        }
                    }
                }}
                />

                <div className='w-[34px] h-[34px]  rounded-full
                cursor-pointer relative flex items-center justify-center'
                style={{
                    background:register? '#1C5D99':'#EF767A'
                }}

                onClick={() => {setShow(!show)}}
                >
                    
                    <motion.div className=" absolute flex items-center justify-center"
                    initial={{opacity:0}}
                    animate={{
                        opacity:!show? 0:1
                    }}
                    >
                        <BiShowAlt 
                        size={25}
                        color="white"
                        />
                    </motion.div>

                    <motion.div className="absolute flex items-center justify-center"
                    initial={{opacity:0}}
                    animate={{
                        opacity:!show? 1:0
                    }}
                    >
                        <BiHide
                        size={25}
                        color="white"
                        />
                    </motion.div>

                </div>

            </div>
            
            {
                register&&!matching &&
                <div className="w-fit flex items-end text-sm py-1 px-1 rounded-full ml-8"
                >
                    * Password Doesn't Match
                </div> 
            }

        </div>
    );
    }

 
export default PasswordField;
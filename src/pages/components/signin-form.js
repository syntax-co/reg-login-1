
import { motion } from "framer-motion";
import UserField from "./form-fields/input-field";
import PasswordField from "./form-fields/password-field";



const SigninForm = () => {
    return (
        <motion.div className="w-full h-full font-primary text-white
        flex flex-col absolute"
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

            <div className="w-fit text-3xl"
            >
                Sign-In
            </div>
            <div className="w-full h-[2px] mt-2 bg-smokeWhite rounded-full " 
            />

            <div className="text-4xl text-lightCoral font-bold my-auto"
            >
                Welcome Back!
            </div>

            <div className="h-2/4 mt-auto  flex flex-col"
            >

                <div className="h-2/3 flex flex-col items-center"
                >
                    <UserField 
                    label={'User'}
                    ident={'signin-user'}
                    />

                    <PasswordField 
                    label={'Password'}
                    />
                </div>

                <div className="h-1/3 flex items-center"
                >
                    
                    <div className="w-fit px-4 py-1 bg-lightCoral rounded-full text-2xl
                    cursor-pointer mx-auto"
                    
                    >
                        Sign-In
                    </div>

                </div>

            </div>

        </motion.div>
    );
}
 
export default SigninForm;
import { motion } from "framer-motion";
import UserField from "./form-fields/input-field";
import PasswordField from "./form-fields/password-field";






const RegisterForm = ({reqs,setReqs}) => {
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
                Register
            </div>
            <div className="w-full h-[2px] mt-2 bg-smokeWhite rounded-full " 
            />

            <div className="text-4xl text-lapisLazuli font-bold my-auto"
            >
                Welcome To The Family!
            </div>

            <div className="h-2/3 mt-auto  flex flex-col"
            >

                <div className="h-2/3 flex flex-col items-center "
                >
                    <div className="w-full flex justify-center my-auto"
                    >
                        <UserField 
                        label={'User'}
                        ident={'signin-user'}
                        register={true}
                        />
                    </div>

                    <div className="w-full flex justify-center my-auto"
                    >
                        <PasswordField 
                        label={'Password'}
                        ident={'reg-pass-field'}
                        register={true}
                        primary={true}
                        reqs={reqs}
                        setReqs={setReqs}
                        />
                    </div>

                    <div className="w-full flex justify-center my-auto"
                    >
                        <PasswordField 
                        label={'Repeat Password'}
                        ident={'reg-pass-field'}
                        register={true}
                        reqs={reqs}
                        setReqs={setReqs}
                        />
                    </div>

                </div>

                <div className="h-1/3 flex items-center"
                >
                    
                    <div className="w-fit px-4 py-1 bg-lapisLazuli rounded-full text-2xl
                    cursor-pointer mx-auto"
                    
                    >
                        Register
                    </div>

                </div>

            </div>

        </motion.div>
    );
}
 
export default RegisterForm;
import { useEffect, useState } from "react";
import FormSelector from "./form-selector";
import BackgroundGrow from "./background-grow";
import SigninForm from "./signin-form";
import { AnimatePresence, motion } from "framer-motion";
import RegisterForm from "./register-form";
import RequirementPanel from "./requirement-panel";
import MobileFormSelector from "./form-selector-mobile";





const SrForm = () => {
    const [selected,setSelected] = useState(0);
    
    const [reqs,setReqs] = useState([0,0,0,0,0,0]);

    // useEffect(() => {
    //     console.log(reqs)
    // }, [reqs]
    
    // );

    return (
        <div className="sr-form-main-body "
        >
            <FormSelector
            selected={selected}
            setSelected={setSelected}
            />

            <MobileFormSelector 
            selected={selected}
            setSelected={setSelected}
            />

            <BackgroundGrow 
            selected={selected}
            />

            <div className="w-full h-full relative flex items-center justify-center overflow-hidden"
            >

                <div className="w-[75%] h-5/6 relative z-[4] "
                >

                    
                    <AnimatePresence >

                        {
                            !selected &&
                            <SigninForm key={'sign-in-form'} />
                        }

                        {
                            selected &&
                            <RegisterForm key={'register-form'} 
                            reqs={reqs}
                            setReqs={setReqs}
                            />
                        }
                    

                    </AnimatePresence>
                    
                </div>
                
                
                <AnimatePresence >
                    {
                        selected&&
                        <RequirementPanel key='requirement-panel'
                        reqs={reqs}
                        />
                    }
                </AnimatePresence>

            </div>
            

            
        </div>
    );
}
 
export default SrForm;
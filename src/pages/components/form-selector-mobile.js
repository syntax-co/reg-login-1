



const MobileFormSelector = ({selected, setSelected}) => {
    return (
        <div className=" h-14 w-5/6 absolute z-20 top-0 flex items-center justify-center
        text-white font-primary text-xl
        sm:flex
        md:hidden
        lg:hidden
        xl:hidden
        "
        >

            <div className="w-[45%] h-4/6 mx-auto rounded-lg  bg-lapisLazuli
            flex items-center justify-center"
            onClick={() => {setSelected(0)}}
            >
                Login
            </div>

            <div className="w-[45%] h-4/6 mx-auto rounded-lg  bg-lapisLazuli
            flex items-center justify-center"
            onClick={() => {setSelected(1)}}
            >
                Register
            </div>

        </div>
    );
}
 
export default MobileFormSelector;
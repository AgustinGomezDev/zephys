import { HiGlobeAmericas, HiMapPin, HiPhone, HiFingerPrint } from "react-icons/hi2";

export const Contact = () => {
    return (
        <div className="relative">
            <img
                className="w-full h-96 object-cover object-center mt-20 z-0"
                src="https://images.pexels.com/photos/1009922/pexels-photo-1009922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dog banner image"
            />
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col rounded-2xl bg-white absolute p-7 px-12 shadow-2xl mt-24">
                    <div className="flex justify-around gap-12">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiGlobeAmericas className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">Unites States</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiMapPin className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">New York, 94126</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiPhone className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">+01 234 567 89</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiFingerPrint className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">Tax ID: 273 384</p>
                        </div>
                    </div>
                    <form className="flex flex-col gap-5 justify-around mt-12">
                        <input required type="text" className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor" placeholder="Name"/>
                        <input required type="email" className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor" placeholder="Email"/>
                        <textarea required className="text-lg border-2 border-slate-300 rounded p-3 resize-none focus:outline-none focus:border-2 focus:border-primaryColor" placeholder="Message"></textarea>
                        <div className="flex items-center justify-center gap-5">
                            <input type="checkbox" className="cursor-pointer w-5 h-5 accent-primaryColor" />
                            <p>Send me a copy of this message</p>
                        </div>
                        <input type="submit" value="Send" className="text-lg border-2 bg-primaryColor text-white border-slate-300 rounded p-3 focus:outline-none active:border-primaryColor active:brightness-75 cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    )
}
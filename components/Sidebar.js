import { Avatar } from "@mui/material";
import Image from "next/image";

function Sidebar() {
    return (
        <div className="space-y-2 min-w-max max-w-lg">
            {/* Top */ }
            <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
                <div className="relative w-full h-14">
                    <Image src="https://rb.gy/i26zak" layout="fill" priorty/>
                </div>
                <Avatar 
                    src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                    className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
                />
                <div className="mt-5 py-4 space-x-0.5 ">
                    <h4 className="hover:underline cursor-pointer">Peter Ayala</h4>
                    <p className="text-black/60 dark:text-white/70 text-sm">abc@gmail.com</p>
                </div>

                <div className="hidden md:inline text-left dark:text-white/75 text-sm">
                    <div className="font-medium sidebarButton space-y-0.5">
                        <div className="flex justify-between space-x-2">
                            <h4>Who viewed your profile</h4>
                            <span className="text-blue-500">123</span>
                        </div>

                        <div className="flex justify-between space-x-2">
                            <h4>Views of your post</h4>
                            <span className="text-blue-500">1,223</span>
                        </div>
                    </div>
                </div>

                <div className="sidebarButton">
                    <h4 className="text-xs"> Access exclusive tools & insights</h4>
                    <h4 className="font-sm">
                        <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
                        Try Premium for free
                    </h4>
                </div>

                <div className="sidebarButton flex items-center space-x-1.5">
                     

                </div>

            </div>

            {/* Bottom */ }
        </div>
    )
}


export default Sidebar;
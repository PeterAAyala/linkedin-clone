import { Avatar } from "@mui/material";
import Image from "next/image";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { signOut, useSession } from "next-auth/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useRouter } from "next/router";


function Sidebar() {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/home");
        },
    });

    return (
        <div className="space-y-2 min-w-max max-w-lg">
            {/* Top */ }
            <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
                <div className="relative w-full h-14">
                    <Image src="https://rb.gy/i26zak" layout="fill" priorty/>
                </div>
                <Avatar 
                    onClick = { signOut }
                    src={session?.user?.image}
                    className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
                />
                <div className="mt-5 py-4 space-x-0.5 ">
                    <h4 className="hover:underline cursor-pointer">{session?.user?.name}</h4>
                    <p className="text-black/60 dark:text-white/70 text-sm">{session?.user?.email}</p>
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

                    <div className="sidebarButton">
                        <h4 className="text-xs"> Access exclusive tools & insights</h4>
                        <h4 className="font-sm dark:text-white">
                            <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
                            Try Premium for free
                        </h4>
                    </div>

                    <div className="sidebarButton flex items-center space-x-1.5">
                        <BookmarkOutlinedIcon classname="!-ml-1"/>
                        <h4 className="text-md dark:text-white">My items</h4>
                    </div>
                </div>

            </div>

            {/* Bottom */ }
            <div className="hidden md:flex bg-white dark:bg-[#1D2226] text-black/60 dark:text-white/70 rounded-lg overflow-hidden flex-col pt-2.5 space-y-2 sticky top-20 border-gray-300 dark:border-none">
                <p className="sidebarLinks">Groups</p>
                <div className="flex items-center justify-between">
                    <p className="sidebarLinks">Events</p>
                    <AddRoundedIcon className="!h-5"/>
                </div>
                <p className="sidebarLinks">Followed Hashtags</p> 
                <div className="sidebarButton text-center">
                    <h4 className="text-sm dark:text-white font-medium">Discover More</h4>
                </div>
            </div>

        </div>
    )
}


export default Sidebar;
import { FaHamburger, FaRegSun } from "react-icons/fa";

export default function Header() {
    return (
        <div className="flex justify-between p-10 items-center">
            <div><FaHamburger className="text-2xl" /></div>
            <div><FaRegSun className="text-2xl" /></div>
        </div>
    )
}

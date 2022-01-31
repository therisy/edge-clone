import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Card({ name }) {
    return (
        <div className="cursor-pointer flex-col flex items-center">
            <div className="flex justify-center items-center p-2  bg-gri w-12 rounded-lg">
                <img src="/insta.svg" />
            </div>
            <p className="mt-2 text-sm font-base">{name}</p>
        </div>
    )
}

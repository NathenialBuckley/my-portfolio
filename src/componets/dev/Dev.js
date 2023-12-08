import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import pfp from "./Assets/pfp.jpg"

export const Dev = () => {
    return (
        <>
            <div class="flex flex-col items-center space-x--4 mt-20">
                <div class="font-bold text-4xl pb-4">
                    <p class="px-20">Full-Stack</p>
                    <p>Software Developer👋</p>
                </div>
                <div class="w-96">
                    Hi, I am Nathenial Buckley. A passionate Full-Stack Software Developer in Chicago, Illinois.📍
                </div>
            </div >
            <div class="flex space-x-2 mt-2 pl-80">
                <a href="https://github.com/NathenialBuckley"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/nathenial-buckley/"><FaLinkedin /></a>
            </div>
            <div class="flex space-x-4 mt-4">
                <div class="font-bold">
                    <h3>Tech Stack |</h3>
                </div>
                <FaHtml5 />
                <FaCss3Alt />
                <FaReact />
                <IoLogoJavascript />
                <FaPython />
                <SiDjango />
            </div>
            <img src={pfp} alt="Profile picture" class="w-32 h-32 rounded-full overflow-hidden" />
        </>
    )
}
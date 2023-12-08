import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
            <div class="px-8">
                <div class="flex justify-between">
                    <div class="font-bold py-5 px-4">Nathenial Buckley</div>
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="#" class="font-bold py-5 px-4 text-gray-700 hover:text-blue-600">About</a>
                        <a href="#" class="font-bold py-5 px-4 text-gray-700 hover:text-blue-600">Projects</a>
                        <a href="#" class="font-bold py-5 px-4 text-gray-700 hover:text-blue-600">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

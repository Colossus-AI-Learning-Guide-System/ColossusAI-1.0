import React from 'react'
import {
    FiArrowLeft, // Back
    FiPlus, // Add
    FiLink, // Connect
    FiTrash2, // Delete
    FiHelpCircle, // Help
    
} from "react-icons/fi";

function page() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-16 h-full bg-gray-100 flex flex-col justify-between items-center py-4">
                {/* Top Icons */}
                <div className="flex flex-col space-y-4">
                    <button className="p-2 text-black border-4 border-dotted border-red-500 hover:bg-gray-300 rounded">
                        <FiArrowLeft size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-300 text-black rounded">
                        <FiPlus size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-300 text-black rounded">
                        <FiLink size={20} />
                    </button>
                </div>
                {/* Bottom Icons */}
                <div className="flex flex-col space-y-4 ">
                    <button className="p-2 hover:bg-gray-300 text-black rounded">
                        <FiTrash2 size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-300 text-black rounded">
                        <FiHelpCircle size={20} />
                    </button>
                </div>
        </div>
    </div>
  )
}

export default page
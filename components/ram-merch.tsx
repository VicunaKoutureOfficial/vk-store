import React from "react";
import Image from "next/image";

type Props = {};

export default function RamMerch({ }: Props) {
    return (
        <div className="flex flex-col md:flex-row p-2 md:p-10 w-full">
            {/* Text Container */}
            <div className="md:w-[25%] flex flex-col justify-center p-2">
                <p className="font-bold text-sm md:text-lg">EVENT T-SHIRT</p>
                <h3 className="font-bold text-3xl">AYODHYA</h3>
                <h3 className="font-bold text-3xl">MERCHANDISE</h3>
                <p className="text-base md:text-xl mt-2">Bring Ayodhya to Life - Scan the QR Code on Our Exclusive AR T-Shirt and Unlock an Immersive Augmented Reality Experience!</p>
            </div>
            {/* Image Container */}
            <div className="w-full md:w-[75%] flex justify-center md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 h-full">
                <div
                    // onClick={handleClick}
                    className="bg-white group cursor-pointer rounded-xl border p-1 h-32 md:h-80 w-[33%] md:w-full md:p-3 space-y-4"
                >
                    {/* Image & actions */}
                    <div className="aspect-square rounded-xl relative self-center">
                        <img
                            src="/ram1.jpg"
                            alt="ram"
                            className="h-32 md:h-80 aspect-square object-cover rounded-md"
                        />
                    </div>
                    {/* Description */}
                    {/* <div>
                        <p className="font-semibold text-xs md:text-lg">Ram AR T-Shirt</p>
                    </div> */}
                </div>

                <div
                    // onClick={handleClick}
                    className="bg-white group cursor-pointer rounded-xl border p-1 w-[33%] md:w-full md:p-3 space-y-4"
                >
                    {/* Image & actions */}
                    <div className="aspect-square rounded-xl relative self-center">
                        <img
                            src="/ram3.jpg"
                            alt="ram"
                            className="h-32 md:h-80 aspect-square object-cover rounded-md"
                        />
                    </div>
                    {/* Description */}
                    {/* <div>
                        <p className="font-semibold text-xs md:text-lg">Ram AR T-Shirt</p>
                    </div> */}
                </div>

                <div
                    // onClick={handleClick}
                    className="bg-white group cursor-pointer rounded-xl border p-1 w-[33%] md:w-full md:p-3 space-y-4"
                >
                    {/* Image & actions */}
                    <div className="aspect-square rounded-xl relative self-center">
                        <img
                            src="/ram5.jpg"
                            alt="ram"
                            className="h-32 md:h-80 aspect-square object-cover rounded-md"
                        />
                    </div>
                    {/* Description */}
                    {/* <div>
                        <p className="font-semibold text-xs md:text-lg">Ram AR T-Shirt</p>
                    </div> */}
                </div>

                
            </div>
        </div>
    )
}
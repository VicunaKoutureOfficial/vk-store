import React from "react";
import Image from "next/image";

type Props = {};

export default function PokemonMerch({ }: Props) {
    return (
        <div className="flex flex-col md:flex-row p-2 md:p-10 w-full">
            {/* Text Container */}
            <div className="w-full md:w-[25%] flex flex-col justify-center p-2">
                <p className="font-bold text-sm md:text-lg">EVENT T-SHIRT</p>
                <h3 className="font-bold text-3xl">Pokemon Horizons</h3>
                <h3 className="font-bold text-3xl">MERCHANDISE</h3>
                <p className="text-base md:text-xl mt-2">Catch&apos;Em All in Style – Pokemon Horizon Merch Made for Every Adventure!</p>
            </div>
            {/* Image Container */}
            <div className="w-full md:w-[75%] flex justify-around">
                <div
                    // onClick={handleClick}
                    className="bg-white group cursor-pointer rounded-xl border p-1 md:p-3 space-y-4"
                >
                    <img src="/pokemon2.jpg" alt='csk' className="h-32 md:h-80 rounded-md" />
                </div>
                <div
                    // onClick={handleClick}
                    className="bg-white group cursor-pointer rounded-xl border p-1 md:p-3 space-y-4"
                >
                    <img src="/pokemon1.jpeg" alt='ram' className="h-32 md:h-80 rounded-md" />
                </div>
                {/* <div
                    // onClick={handleClick}
                    className="bg-white group cursor-pointer rounded-xl border p-1 md:p-3 space-y-4"
                >
                    <img src="/csk3.jpeg" alt='ram' className="h-32 md:h-80 rounded-md" />
                </div> */}
            </div>
        </div>
    )
}
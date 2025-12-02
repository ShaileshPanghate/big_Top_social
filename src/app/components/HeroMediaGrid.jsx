"use client";

import Image from "next/image";

export default function HeroMediaGrid() {

    return (
        <>
            <section className="w-full h-[600px] md:h-[740px]">
                <div className="relative w-full h-full overflow-hidden ">
                    <div className="absolute h-full inset-0 bg-gradient-to-r from-orange-300 via-violet-200 to-teal-300 opacity-80 pointer-events-none"></div>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10  md:py-18 md:px-20 ">

                        <div className="md:mx-auto w-full md:w-2/3 mb-14 text-center   ">
                            <h2 className="text-6xl mb-6 font-medium tracking-tighter "><span className="font-['Brush_Script_MT',cursive] tracking-[0.07em] text-5xl">Marketing</span> without borders</h2>
                            <p className="text-gray-700 text-3xl mb-4">
                             Creative strategists driving digital business growth.
                            </p>
                        </div>
                        <div className="md:ml-50 md:w-6xl  md:p-2">
                            <div className="absolute md:w-60 w-36 right-34 sm:right-30 md:right-174 md:top-114 top-106 px-6 py-3 h-[160px] rounded-xl bg-amber-400 ">
                                <h2 className="text-black md:text-lg text-md  font-bold md:mb-4 mb-1 text-center">
                                    Get Your Free consultation Today
                                </h2>
                                <button className="bg-black  text-white px-2 py-2 md:ml-12 md:mb-4  rounded-lg font-semibold hover:bg-gray-900 transition">
                                   <a href="/contact"> LET'S TALK</a>
                                </button>
                            </div>
                            {/* <div className="flex">

                                <Image src="/images/h1.png" alt="image" width="100" height="300" sizes="(min-width:1024px) 33vw, (min-width:640px) 45vw, 100vw"
                                    style={{ objectFit: "cover" }} />
                                <Image src="/images/h1.png" alt="image" width="100" height="300" sizes="(min-width:1024px) 33vw, (min-width:640px) 45vw, 100vw"
                                    style={{ objectFit: "cover" }} />

                            </div> */}
                            <div className="flex gap-1 px-4 mx-auto">
                                <div className="flex">
                                    <div className="w-[180px]  sm:w-[140px] md:w-[180px] lg:w-[240px] md:aspect-[9/16] overflow-hidden rounded-bl-2xl rounded-br-2xl rounded-tl-2xl  shadow-lg">
                                        <video
                                            src="/videos/v1.mp4"   // path to your reel video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <Image className="rounded-br-2xl rounded-tr-2xl" src="/images/h1.png" alt="image" width="180" height="60" sizes="(min-width:1024px) 33vw, (min-width:640px) 45vw, 100vw"
                                            style={{ objectFit: "cover" }} />
                                    </div>
                                </div>

                                <div className="flex">
                                    <div >
                                        <Image className="rounded-bl-2xl rounded-tl-2xl" src="/images/h1.png" alt="image" width="180" height="60" sizes="(min-width:1024px) 33vw, (min-width:640px) 45vw, 100vw"
                                            style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="w-[180px] sm:w-[140px] md:w-[180px] lg:w-[240px] aspect-[9/16] overflow-hidden rounded-bl-2xl rounded-tr-2xl  shadow-lg">

                                        <video
                                           src="/videos/Web_dev.mp4"   // path to your reel video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div className="self-end">
                                        {/* <div className="m-6 mb-30">
                                            <img src="/images/bts_done-removebg.png" alt="" width="80px"/>
                                            <h6>Hello Marketing</h6>
                                        </div> */}
                                        <Image className="rounded-br-2xl rounded-tr-2xl" src="/images/h1.png" alt="image" width="180" height="60" sizes="(min-width:1024px) 33vw, (min-width:640px) 45vw, 100vw"
                                            style={{ objectFit: "cover" }} />

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

const index = () => {
    return (
        <section className='px-8 py-20 h-[672px] ssm:[900px]
        bg-ambassador-pattern bg-[65%] bg-no-repeat
        bg-cover relative -z-20 xl:bg-right-top
        '>
            <div className="container h-full">
                <div className="flex items-end w-full h-full relative left-2 md:left-10 z-100 bottom-0">
                    <div className="bg-white w-full md:w-auto ssm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl relative z-100 rounded-3xl py-10 px-14
                        before:absolute before:bg-regal-blue
                        before:w-full before:h-full before:top-4 before:md:top-10
                        before:rounded-3xl before:-left-4 before:md:-left-10 before:-z-10
                    ">
                        <div className="text-regal-blue font-bold text-2xl ssm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl pb-10">Ambassador Program</div>
                        <button type='button' className='font-medium text-xl text-white rounded-full bg-regal-blue w-full p-3 ssm:w-auto px-9'>More details</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index

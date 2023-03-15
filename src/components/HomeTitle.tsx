import Image from 'next/image';

const HomeTitle = () => {
    return (
        <div className="pt-4 md:pt-8 flex flex-col px-[10%] md:px-[15%] lg:px-[20%] xl:px-[22%]">
            <div className="flex flex-row items-center h-[35vw] md:h-[25vw]">
                <div className="flex flex-col">
                    <h1 className="text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] leading-tight font-bold heading">
                        Michael<br />Zhao
                    </h1>
                </div>
                <div className="relative w-[30rem] md:w-[25rem] h-full ml-4 md:ml-12">
                    <Image
                        src="/face.png"
                        layout="fill"
                        objectFit="contain"
                        alt="picture of my face"
                    />
                </div>
            </div>
            <p className="text-textLight text-xl sm:text-2xl md:text-3xl mt-4 md:mt-0">programmer · student · artist</p>
        </div>
    );
};

export default HomeTitle;

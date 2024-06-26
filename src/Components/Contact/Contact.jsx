export const Contact = () => {
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center p-4" name="contact">
            <form className="flex flex-col w-[65%] ">
                <div className="pb-8 items-center flex flex-col xl:items-start">
                    <p className="text-4xl font-bold inline border-b-4 border-[#19ddd6] text-white">Contact </p>
                    <p className="text-center py-4 text-white">so we can get to know each other better!<span className="text-[#19ddd6] text-2xl">.</span></p>
                </div>
                <input className="bg-gray-300 p-3 mb-4 rounded-lg" placeholder="Name" name="name" type="text" />
                <input className="bg-gray-300 p-3 mb-4 rounded-lg" type="email" placeholder="Email" name="email" />
                <textarea className="bg-gray-300 p-3 mb-4 rounded-lg" name="message" placeholder="Message" rows="6"></textarea>
                <button className="bg-[#19ddd6] text-white px-8 py-3 mx-auto rounded-lg hover:bg-opacity-80 transition duration-300 ease-in-out">Submit</button>
            </form>
        </div>
    );
};

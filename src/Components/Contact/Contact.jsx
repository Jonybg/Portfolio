export const Contact = () => {
    return (

        <div className="w-full h-screen bg-black flex justify-center items-center p-4" name="contact" >
            <form className="flex flex-col mas-w-[600px] w-[50%]" >
                <div className="pb-8  items-center flex  flex-col xl:items-start ">
                    <p className="text-4xl font-bold inline border-b-4 border-[#19ddd6] text-white" >Contact</p>
                </div>
                <input className="bg-gray-300 p-2  " placeholder="Name" name="name" type="text" />
                <input className="my-4 p-2 bg-gray-300" type="email" placeholder="Email" name="email" />
                <textarea className="bg-gray-300 p-2" name="message" placeholder="Message" rows="10"></textarea>
                <button className="text-white border-2 hover:bg-[#19ddd6] hover:border-[#19ddd6] px-10 py-3 my-8 mx-auto flex items-center rounded-lg " >Submit</button>

            </form>
        </div>

    )
}
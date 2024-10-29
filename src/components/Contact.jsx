


const Contact = () => {
    return (
        <section id='contact' className='flex mt-32 mb-10 '>
            <div className='w-4/5 mx-auto mt-16 '>
                <div className='items-center space-y-2 text-center'>
                    <h1 className='md:text-2xl w-full text-lg text-c_white font-bold'><span className='mr-1 text-primary'>04.</span> Contact</h1>
                    <p>Feel free to reach out to me for any queries, collaborations, or just to say hi!</p>
                </div>
                <div className="text-center mt-6">
                    Follow me on <span className="text-primary underline">Linkedin</span> or email me directly <span className="text-primary underline">unnikrishnan131100@gmail.com</span>
                </div>
                <div className="justify-center flex p-3 mt-10  ">

                    <button className="border-primary border-2 p-3 rounded-md text-primary hover:bg-primary hover:text-white font-bold">
                        Say Hello
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
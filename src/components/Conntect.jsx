import { socialMedia } from "../config";


const Conntect = () => {
    const openLink = (url) => {
        window.open(url, "_blank");
    };
    return (
        <section className="w-full border-primary border-t-[1px]">
            <div className="w-3/5 mx-auto mt-5 mb-5  space-y-16 text-center">
                Follow me on
                <a
                    href="https://www.linkedin.com/in/uk-krish/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline cursor-pointer">Linkedin</a> or email me directly
                <a
                    href="mailto:unnikrishnan131100@gmail.com"
                    target="_blank"
                    rel="noreferrer" className="text-primary underline">unnikrishnan131100@gmail.com</a>
            </div>
        </section>
    )
}

export default Conntect
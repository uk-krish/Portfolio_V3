import { FaArrowDown } from "react-icons/fa6";

const Scrolldown = () => {
    return (
        <div className="flex items-center">
            <svg
            className="w-10 h-10 text-white "
            viewBox="0 0 247 390"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="wheel"
                d="M123.359,79.775l0,72.843"
                style={{ fill: "none", stroke: "#F9F9F5", strokeWidth: "25px" }}
            />
            <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{ fill: "none", stroke: "#F9F9F5", strokeWidth: "25px" }}
            />
        </svg>
        <p className="mx-3 flex items-center">scroll down</p>
        <FaArrowDown/>
        </div>
    )
}

export default Scrolldown
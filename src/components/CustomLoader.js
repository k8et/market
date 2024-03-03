import { PuffLoader } from "react-spinners";

const CustomLoader = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <PuffLoader color={"#1F1F21"} />
        </div>
    );
};

export default CustomLoader;

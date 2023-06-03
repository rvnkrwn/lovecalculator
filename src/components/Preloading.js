import { useEffect, useState } from "react";

function Preloading() {
const [progress, setProgress] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setProgress((prevProgress) => {
        if (prevProgress === 100) {
        clearInterval(interval);
        const preload = document.querySelector('.preload');
        preload.style.display = 'none';
        return prevProgress;
        } else {
        return prevProgress + 1;
        }
    });
    }, 30);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
}, []);

    return(
        <div className="preload" style={{height: "100vh", width: "100vw", backgroundColor: "black"}}>
            <div style={{position: "fixed", zIndex: "999", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "50px", width: "fit-content"}}>
                <h2 style={{fontSize:"200px"}}>❤️</h2>
            </div>
            <h2 style={{color: "white", position: "fixed", zIndex: "999", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "30px", fontWeight: "bold"}}>
                {progress}%
            </h2>
        </div>
    )
}

export default Preloading;
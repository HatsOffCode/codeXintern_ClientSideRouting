import { useState } from "react";

function Hero(){

    const [action, setAction] = useState("")
     
    return(
        <div className="bg-slate-100 d-flex flex-column align-items-center justify-content-center vh-100">
            <h4 className="text-danger font-bold mb-1"><marquee>Welcome to the Digital Expense Recorder!</marquee></h4>
            <p className="font-semibold m-0">Record every coin you spend and stay in control.</p>
            <img src="ER image.jpg" alt="ERecorderImage" width="350px" height="150px" className="img-fluid rounded-xl my-sm-2 p-2"/>
            <button type="button" className="btn btn-danger btn-lg my-sm-2" onClick={() => setAction(alert("This Feature Coming soon..!"))}>Get Started</button>
        </div>
    );
}

export default Hero;

import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './midbody.css';



const Midbodylitho = () => {
    
    return (
        <div style={{height:"500px"}}>
            <div className="container" >
                <div className="row">
                    <div className="content col">
                        <div className="p-5 textgreen" style={{ top: "35%", left:"12%"}}> <strong>175+ </strong></div>
                        <div className="subtext translate-middle p-5" style={{ top: "72%", left: "20%" }}>World wide offices</div>
                        <div className="position-absolute" style={{top:"85%" , left:"12%"}}> Lorem ipsum dolor sit consectetur<br/> do eiusmod tempor incididuntr </div>
                    </div>
                    <div className="content col">
                        <text className=" centretxt translate-middle" style={{top:"50%", left:"50%"}}> <strong>20</strong> </text><br/>
                        <div className=" position-absolute translate-middle p-5" id="yrsofexp" style={{top:"95%" , left:"50%"}}><strong>Years of Experience</strong></div>
                    </div>
                    <div className="content col">
                        <div className="p-5 textgreen" style={{ top: "35%", right:"12%"}}> <strong> 200+ </strong></div>
                        <div className="subtext translate-middle p-5" style={{ top: "72%", right: "3%" }}>High skilled people</div>
                        <div className="position-absolute" style={{top:"85%" , right:"12%"}}> Lorem ipsum dolor sit consectetur<br/> do eiusmod tempor incididuntr </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="position-absolute" style={{top:"130%" , left:"43%"}}>
                   <span className="circle"></span>
                </div>
            </div>
        </div>
    )
};


export default Midbodylitho;
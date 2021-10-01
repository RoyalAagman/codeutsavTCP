import 'bootstrap/dist/css/bootstrap.min.css';
import './blockit.css'

function Blockitem() {
    return (
        <div className>
            <div className="mainbox">
                <div className="smltxt"><center> Amazing design services</center></div>
                <div className="lgtxt"> <center> Beautiful and easy to use professional <br /> animations and drag & drop feature</center></div>
            </div>
            <div className="container varblock">
                <div className="row">
                    <div className="col txtjk border">
                        <div></div>
                        <div className="txtjk"><b>eCommerce development</b></div>
                        <div className="txtjk" style={{color:"grey"}}> Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.</div>
                    </div>
                    <div className="col txtjk border">
                        <div></div>
                        <div className="txtjk"><b>Design and development</b></div>
                        <div className="txtjk" style={{color:"grey"}}>Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.</div>
                    </div>
                    <div className="col txtjk border">
                        <div></div>
                        <div className="txtjk"><b>Social media marketing</b></div>
                        <div className="txtjk" style={{color:"grey"}}> Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt. </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    


export default Blockitem;
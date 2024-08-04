import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QRCodeGenerator(){

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode(){
        setQrCode(input);
        setInput('');
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div className="input">
                <input 
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter text.."
                onChange={(event) => setInput(event.target.value)}
                />
                <button
                    onClick={handleGenerateQrCode}
                    disable={input && input.trim() !== "" ? false : true}
                >
                    Generate
                </button>
            </div>

            <div>
                <QRCode 
                id="qr-code-value"
                value={qrCode}
                size={300}
                bgColor="#fff"
                />
            </div>
        </div>
    )
}
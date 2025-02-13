import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    // Initialize scanner only once
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );

      scannerRef.current.render(onScanSuccess, onScanFailure);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((error) => {
          console.error("Failed to clear scanner", error);
        });
      }
    };
  }, []);

  const onScanSuccess = (decodedText) => {
    setScanResult(decodedText);
    if (scannerRef.current) {
      scannerRef.current.clear().catch((error) => console.error("Failed to clear scanner", error));
    }
    navigate(`/payment?stallId=${encodeURIComponent(decodedText)}`);
  };

  const onScanFailure = (error) => {
    console.warn(`QR code scan error = ${error}`);
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen w-full relative p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-4 left-4 text-white text-2xl p-3 rounded-full"
      >
        &#x2190;
      </button>

      {/* Scanner UI */}
      <div className="relative w-full max-w-md aspect-square border-4 border-white rounded-lg overflow-hidden mt-10">
        <div id="reader" className="w-full h-full"></div>
      </div>

      {scanResult && (
        <div className="mt-4 text-center text-white">
          <p>Scanned Result: {scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default Scanner;

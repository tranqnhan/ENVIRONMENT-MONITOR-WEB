"use client"

import { useState } from "react";
import DefaultButton from "./default_button";
import LoadingWheel from "./loading_wheel";

export default function Settings() {
   const [bluetoothScan, setBluetoothScan] = useState<boolean>(false);
   const [message, setMessage] = useState("error goes here");

    function startScanningBluetoothDevice() {
        setBluetoothScan(true);
        setMessage("Secure:" + window.isSecureContext);
        navigator.bluetooth.requestDevice({
              filters: [{
                name: 'BLE_ESP32_PROV'
            }],
        })
        .then(device => { 
            setMessage("Device name: " + device.name);
         })
        .catch(error => { setMessage(error); });
    }

    return (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">
            Network Provisioning
          </h2>

          <div className="px-4 flex flex-col gap-2">
            Scan bluetooth device
                <div className="flex flex-col gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Device Name"
                        className="w-full rounded-md border border-gray-300 px-4 py-2"
                        />
                    
                    { bluetoothScan ? <LoadingWheel/> : 
                        <DefaultButton onclick={startScanningBluetoothDevice}>
                            Scan
                        </DefaultButton>
                    }
                    <p>
                        {message}
                    </p>
                </div>
          </div>
        </div>
    );
}
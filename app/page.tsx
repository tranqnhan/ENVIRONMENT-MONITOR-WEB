import Image from "next/image";
import HeaderButton from "./header_button";
import Navigation from "./navigation"
import Settings from "./settings"

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <h1 className="font-bold text-lg">Environment Monitor</h1>
          <Navigation/>
        </div>

        <Settings/>

    </div>
  );
}

"use client";

import { useState } from "react";
import HeaderButton from "./header_button";

export default function Navigation() {
    
    const ANALYTICS_NAME: string = "Analytics" as const;
    const SETTINGS_NAME: string = "Settings" as const;
    
    type Page = 
        typeof ANALYTICS_NAME | 
        typeof SETTINGS_NAME
    ;

    const [selected, setSelected] = useState<Page>(SETTINGS_NAME);

    return (
        <nav className="grow flex flex-row justify-end gap-4">
            <HeaderButton 
                onclick={() => setSelected(ANALYTICS_NAME)} 
                active={selected === ANALYTICS_NAME}>
                {ANALYTICS_NAME}
            </HeaderButton>
            <HeaderButton 
                onclick={() => setSelected(SETTINGS_NAME)} 
                active={selected === SETTINGS_NAME}>
                {SETTINGS_NAME}
            </HeaderButton>
        </nav>
    );
}
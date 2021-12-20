import { createGlobalStyle } from "styled-components";
import Header from "./Header";

export default function Page({ children }) {

    const GlobalStyles = createGlobalStyle` 
    
    `;

    return (
        <div>
            <Header />
            <h2>
                Page Com
            </h2>
            {children}
        </div>
    )
}
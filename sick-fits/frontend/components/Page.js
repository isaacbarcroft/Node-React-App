import Header from "./Header";

export default function Page({ children }) {

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
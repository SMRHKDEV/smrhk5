import MainTheme from "@/themes";

export default function WrapsContainer({ children }) {
    return (
        <MainTheme>
            {children}
        </MainTheme>
    )
}
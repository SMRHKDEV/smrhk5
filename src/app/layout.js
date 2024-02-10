import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const metadata = {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
}


export default function RootLayout({ children }) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body>{children}</body>
        </html>
    );
}

export const metadata = { title: 'Root Layout', description: 'A basic root layout component' };

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
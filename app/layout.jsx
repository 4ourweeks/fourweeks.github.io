export const metadata = {
  title: "FOUR WEEKS",
  description: "Independent media, commerce, and intelligence platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "black", color: "white" }}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import UnicornScript from "../components/UnicornScript";

export const metadata = {
  title: "Adam's Oedipus Project",
  description: "Adam Xu's website with the timeline of Oedipus. Enjoy!",
  keywords: "Oedipus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <UnicornScript />
      </body>
    </html>
  );
}

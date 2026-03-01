import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: {
    default: "Solduino Developer Docs",
    template: "%s | Solduino Developer Docs",
  },
  description:
    "Developer documentation for the Solduino SDK on Arduino and ESP32, including API reference, guides, and examples.",
  metadataBase: new URL("https://sol-docs.vercel.app"),
};

const navbar = (
  <Navbar
    logo={<strong>Solduino Developer Docs</strong>}
    projectLink="https://github.com/torrey-xyz/solduino"
  />
);

const footer = (
  <Footer>
    Apache-2.0 Licensed. Solduino documentation for Arduino and ESP32 developers.
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/torrey-xyz/solduino/tree/main/docs"
          editLink="Edit this page on GitHub"
          feedback={{
            content: "Question? Give us feedback",
            labels: "documentation,feedback",
          }}
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          toc={{
            backToTop: "Back to top",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

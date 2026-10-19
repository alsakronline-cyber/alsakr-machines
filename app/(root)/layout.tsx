export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ background: "#030b16" }}>{children}</body>
    </html>
  );
}

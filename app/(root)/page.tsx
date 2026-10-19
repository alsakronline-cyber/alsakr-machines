export const metadata = { title: "Top Group | Al Sakr Machines" };

// Static export cannot redirect on the server, so the root page forwards to the default locale.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${base}/ar/`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `var l=(navigator.language||'').slice(0,2)==='en'?'en':'ar';try{l=localStorage.getItem('lang')||l}catch(e){}location.replace('${base}/'+l+'/')`,
        }}
      />
    </>
  );
}

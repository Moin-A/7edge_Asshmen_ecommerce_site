import "../styles/tailwind.css";
import Page from "../components/Page";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-hero-image bg-no-repeat bg-cover bg-center bg-black">
      <Page>
        <Component {...pageProps} />
      </Page>
    </div>
  );
}

export default MyApp;

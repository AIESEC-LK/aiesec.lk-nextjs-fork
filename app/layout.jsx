import "@styles/globals.css";
import Nav from "@components/Nav";
import Home from "@components/two-column";


const RootLayout = () => {
  return (
    <html>
      <head>
        <title>AIESEC in Sri Lanka</title>
      </head>
      <div>
        <Nav />
        <h2>AIESEC.lk Rewamp</h2>
        <Home/>
      </div>
    </html>
  );
};
``
export default RootLayout;

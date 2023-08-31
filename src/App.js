import Footer from "./components/footer/Footer";
import RouterApp from "./components/router/router";
import Provider from "./context/Provider";


function App() {
  return (
    <Provider>
      <RouterApp />
      <Footer />
    </Provider>
  );
}

export default App;

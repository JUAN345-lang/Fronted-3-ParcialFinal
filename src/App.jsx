
import { Routes, Route  } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contacto from './Routes/Contacto'
import { ThemeContext } from "./contexts/ThemeContext";
import { ApiProvider } from "./contexts/ApiContext"
import { useContext } from "react";
import Favs from "./Routes/Favs";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
        // está en modo oscuro y debe usar la clase oscura o clara */}
      <div className={theme.theme}>
        <Navbar />
        <main>
        <ApiProvider>
          <Routes>
            <Route path='/'  element={ <Home /> }>
            </Route>
            <Route path='/home'  element={ <Home  /> }>
            </Route>
            <Route path='/dentist/:id'  element={ <Detail /> }>
            </Route>
            <Route path='/contacto'  element={ <Contacto /> }>
            </Route>
            <Route path='/outstanding'  element={ <Favs /> }>
            </Route>
            <Route path="*" element={<div>noo</div> }>
            </Route>
          </Routes>
          </ApiProvider>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

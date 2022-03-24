import Navbar from './Navbar';
import Footer from './components/Footer';
import { UsersContextProvider } from './context/UsersContext';

function App() {
    return (
        <UsersContextProvider>
            <Navbar />
            <Footer />
        </UsersContextProvider>
    );
}

export default App;

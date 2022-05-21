import Navbar from './Navbar';
import Footer from './components/Footer';
import { UsersContextProvider } from './context/UsersContext';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <UsersContextProvider>
            <Toaster />
            <Navbar />
            <Footer />
        </UsersContextProvider>
    );
}

export default App;

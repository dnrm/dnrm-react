import logo from './logo.svg';
import './Dnrm.css';

function Dnrm() {
    return (
        <div className="dnrm-component">
            <div className="container">
                <img src={logo} alt="" />
                <h1>Webpack</h1>
            </div>
        </div>
    )
}

export default Dnrm;
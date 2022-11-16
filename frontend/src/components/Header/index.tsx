import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por&nbsp;
                    <a href="https://www.linkedin.com/in/adauto-bueno/">Adauto Bueno</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
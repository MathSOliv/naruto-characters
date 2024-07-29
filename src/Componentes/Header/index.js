import './Header.css';

import Logo from '../../assets/images/Akatsuki-Logo.png';

const Header = () => {

    return(
        <div className='header' >
            <img src={ Logo } alt='HeaderLogo' />
            <p> NARUTO CHARACTERS </p>
        </div>
    )

}

export default Header;
import '../../styling/headerStyle/header.css';

function Header(){

    return (
        <div id='header'>
            <img src="assets/Books-of-age.png" alt="" id='Header-Logo' />
            <div id='navigation-section'>
            <ul id='navigation-items-container'>
                <a href="#" className='navigation-items'><li >Home</li></a>

                <a href="#" className='navigation-items'><li >About</li></a>
               
                <a href="#" className='navigation-items'><li >Contact</li> </a>
            </ul>
            </div>
        </div>
    )
}

export default Header;
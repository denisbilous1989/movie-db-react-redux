import './style.scss'

const Header = () => (
  <header className="header">
    <div className="content">
      <div className="container">
        <nav className="navigation">
          <a className="logo" href="#">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt=""/>
          </a>
          <ul className="menu">
            <li className="menu_item">
              <a href="#">Films</a>
            </li>
            <li className="menu_item">
              <a href="#">TV series</a>
            </li>
            <li className="menu_item">
              <a href="#">Persons</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header;
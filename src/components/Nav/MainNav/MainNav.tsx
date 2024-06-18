import "./MainNav.scss";

export const MainNav = () => {
  return (
    <div className="main-nav">
      <span className="container-for-links">
        <ul className="main-nav-list">
          <li className="main-nav-list-item">
            <a href="/">Strona główna</a>
          </li>
          <li className="main-nav-list-item">
            <a href="/add">Dodaj produkt</a>
          </li>
          <li className="main-nav-list-item">
            <a href="/edit">Edytuj produkt</a>
          </li>
          <li className="main-nav-list-item">
            <a href="/sell">Sprzedaj produkt</a>
          </li>
        </ul>
      </span>
    </div>
  );
};

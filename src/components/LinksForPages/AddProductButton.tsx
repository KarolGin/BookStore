import "./AddProductButton.scss";
export const LinkForAddProduct = () => {
  return (
    <div className="container-for-links">
      <ul>
        <li>
          <a className="link-for-page" href="/add">
          Dodaj produkt
          </a>
          </li>
          <li>
            <a className="link-for-page" href="/edit">
            Edytuj produkt
            </a>
        </li>
      </ul>
    </div>
  );
};
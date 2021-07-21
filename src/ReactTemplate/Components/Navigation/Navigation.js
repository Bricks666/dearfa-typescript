import "./Navigation.css";

function NavigetionItem(props) {
  return (
    <li
      className={
        "navigation__item " +
        (props.isHidden === "true" ? "navigation__item_hidden" : "")
      }
    >
      <a className="navigation__link " href="#1">
        {props.linkText}
      </a>
    </li>
  );
}
function Navigation(props) {
  return (
    <nav className={props.className + " navigation"}>
      <ul className="navigation__list">
        <NavigetionItem linkText="Профиль" />
        <NavigetionItem linkText="Сообщения" />
        <NavigetionItem linkText="Новости" />
        <NavigetionItem linkText="Музыка" />
        <NavigetionItem isHidden="true" />
        <NavigetionItem linkText="Настройки" />
      </ul>
    </nav>
  );
}

export default Navigation;

import logo from "../../assets/images/logo.svg";

const Navigation = () => {
  return (
    <>
      <nav uk-navbar="true">
        <div className="uk-navbar-left uk-background-secondary">
          <img src={logo} alt="logo" className="uk-width-1-6" uk-img="true" />
          <h3>TODO APP</h3>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

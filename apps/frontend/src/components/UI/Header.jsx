import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="flex flex-row justify-center mx-auto p-6 space-x-10">
      <div className="relative text-center transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-105 duration-150">
        <Link to="/">
          <img width={450} src="src\assets\logo.png" />
        </Link>
      </div>
      {props.children}
    </div>
  );
}

export default Header;

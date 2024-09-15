import Header from './Header';
import RopeBar from './RopeBar';

function Navbar(props) {
  return (
    <div>
      <Header />
      {!props.main ? <RopeBar /> : <></>}
      {props.children}
    </div>
  );
}

export default Navbar;

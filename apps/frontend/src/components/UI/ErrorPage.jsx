import useTime from '../../hooks/useTime';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function ErrorPage(props) {
  const time = useTime();
  return (
    <div class="flex flex-row justify-center mx-auto p-6 space-x-10">
      <Navbar main={true}>
        <div className="flex justify-center items-center">
          <button className="w-96">
            <Link to="/">
              <img src="src\assets\zoroLostErrorPage.webp" />
              <div>
                Seems like Zoro lost his way again and found himself in the
                backrooms...
              </div>
            </Link>
          </button>
        </div>
      </Navbar>
    </div>
  );
}

export default ErrorPage;

import { FaSignInAlt, FaSignOutAlt, FaUser, FaStopwatch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'> GoalSetter</Link>
      </div>
      <ul>
        <li>
          <button className='btn' to='/timer'>
            <FaStopwatch /> Start Timer
          </button>
        </li>
        {user ? (
          <li>
            <button className='btn btn-reverse' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;

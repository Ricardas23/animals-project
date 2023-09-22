import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
const Toolbar = ({ userLoggedIn, setUserLoggedIn,favorites }) => {

    const nav = useNavigate();

    const logOut = () => {
        setUserLoggedIn();
        nav('/');
    }

    //useEffect(() => console.log(location?.pathname?.includes('/otherusers/')))

    return (
        <div className='toolbar'>
            {userLoggedIn && <div className="logged-in">
                {/* <div className="logged-user">Hello, {userLoggedIn.username}</div> */}
                <div className="afterLogin">
                    <Link to='/'>Home</Link>
                    <Link to='/AddAnimal'>Animals</Link>
                    <Link to='/favorite'>Favorite Animals({favorites.length})</Link>
                    {/* <div onClick={() => nav("/favorite")}> ({favorites.length})</div> */}
                </div>


                    <div className='logout-wrapper'>
                        <button className="logout" onClick={logOut}>
                            <p>Logout</p>
                        </button>
                    </div>
            </div>}

            {!userLoggedIn && <div className="not-logged">
                <Link to='/'>Home</Link>
                <Link to='/Register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>}

        </div>
    )
}

export default Toolbar
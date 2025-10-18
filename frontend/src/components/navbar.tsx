import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const navbar = ({user,logout}) => {
  const handleLogout = () => {
    const resultat = confirm("voulez-vous vous deconnecter");
    if(resultat) logout() ;
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm shadow-info ">
  <div className="flex-1">
    <a className="btn btn-ghost btn-info text-info text-xl font-bold hover:rounded-3xl hover:text-white font-f5 ">SmartS</a>
  </div>
  <div className="flex-wrap mr-10 flex gap-5 items-center justify-center ">
       <Link to="/Acceuil" className='btn btn-ghost btn-primary rounded-2xl font-bold text-md font-f5 tracking-widest hover:text-white'>Acceuil</Link>
       <Link to="/cours" className='btn btn-ghost btn-success rounded-2xl font-bold text-md font-f5 tracking-widest hover:text-white'>Cours</Link>
       <Link to="/chatbot" className='btn btn-ghost btn-info rounded-2xl font-bold text-md font-f5 tracking-widest hover:text-white'>Chatbot</Link>
        </div>
      <div className="flex-wrap mx-8 flex gap-3 items-center justify-center ">
       {!user && (<><Link to="/register" className='btn  btn-error rounded-2xl font-bold   border-error hover:text-white hover:shadow-md hover:shadow-secondary'>Register</Link>
       <Link to="/login" className='btn  btn-primary rounded-2xl font-bold   border-primary hover:text-white hover:shadow-md hover:shadow-success'>Login</Link></>)
}
        </div> 
    {user && <div className="dropdown dropdown-end gap-10 flex">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-transparent  glass rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
        <li>
          <a className="justify-between text-md lg:text-lg font-bold">
            {user.name}
            <span className="badge btn-primary btn-sm">en ligne</span>
          </a>
        </li>
        <li><a className="font-bold text-md">Settings</a></li>
        <li><button onClick={handleLogout} className="btn btn-error hover:text-white">Logout</button></li>
      </ul>
    </div>}
  </div>
  </div>
  )
}

export default navbar

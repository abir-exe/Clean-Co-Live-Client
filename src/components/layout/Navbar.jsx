import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {

  const {user, logout} = useAuth();
//  console.log(user)
    return (
        <div className="w-full px-[25px] max-w-[1200px] mx-auto">
      <div className="flex-1 ">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <div className=" flex gap-2">
          {/* Navbar menu content here */}
          <NavLink to="/about" className={({isActive}) =>
        isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) =>
        isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>Contact</NavLink>
        {user?.email? <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button> :
          <NavLink to="/login" className={({isActive}) =>
        isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>Login</NavLink>
      }
        </div>
      </div>
      </div>
    );
};

export default Navbar;
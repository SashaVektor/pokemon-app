import { signOut } from "firebase/auth"
import {MdOutlinePowerSettingsNew} from "react-icons/md"
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemonType, setToast, setUserStatus } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/constants";
import { firebaseAuth } from "../utils/firebaseConfig";

const routes = [
  {
    name: pokemonTabs.description,
    value: "Description",
  },
  {
    name: pokemonTabs.evolution,
    value: "Evolution",
  },
  {
    name: pokemonTabs.locations,
    value: "Catching",
  },
  {
    name: pokemonTabs.moves,
    value: "Capable Moves",
  },
];

const Footer = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const currentPokemonTab = useAppSelector((state) => state.app.currentPokemonTab)
  const handleLogout = async () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined))
    dispatch(setToast("Logout successfully from firebase"))
  }
  return (
    <footer>
      <div className="block">

      </div>
      <div className="data">
       {location.pathname.includes("pokemon") && <ul>
          {routes.map((route) => (
            <li key={route.name} className={`${currentPokemonTab === route.name ? "active" : ""}`}
            onClick={() => dispatch(setPokemonType(route.name))}>{route.value}</li>
          ))}
        </ul>}
      </div>
      <div className="block">
        <MdOutlinePowerSettingsNew onClick={handleLogout}/>
      </div>
    </footer>
  )
}

export default Footer

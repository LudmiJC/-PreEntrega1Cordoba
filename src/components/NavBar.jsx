import { CartWidget } from "./CartWidget";

export const NavBar = () => {
return(
<>
<h6>Haustar</h6>
<ul>
    <li>
        <a href="Inicio"></a>
    </li>
    <li>
        <a href="Sobre Nosotros"></a>
    </li>
    <li>
        <a href="Servicios"></a>
    </li>
    <li>
        <a href="Contacto"></a>
    </li>
</ul>
<CartWidget/>
</>
);
};
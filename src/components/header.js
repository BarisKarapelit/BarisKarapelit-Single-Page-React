import {Fragment} from "react";
import {nanoid} from "nanoid";

const MENU_DATA = [
    {content: 'Ana Sayfa'},
    {content: 'Hakkınızda'},
    {content: 'İletişim'},
]

export function Header() {

    const menuItem = MENU_DATA.map(
        (menu) => {
            return (
                <li key={nanoid()}>{menu.content}</li>
            )
        }
    )
    return (
        <Fragment key={nanoid()}>
            <header><h1 className="logo">
                Logo
            </h1>
            </header>
            <nav>
                <ul>
                    {menuItem}
                </ul>
            </nav>
        </Fragment>
    )
}
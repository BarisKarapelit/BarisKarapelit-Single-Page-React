import {Fragment} from "react";
import {nanoid} from "nanoid";

export function Main() {
    return (
        <Fragment key={nanoid()}>
            <main>
                <section>1</section>
                <section>2</section>
                <section>3</section>
            </main>
        </Fragment>
    )
}
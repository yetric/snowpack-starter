import React from "react";
import styles from "./styles/App.module.css";
import { ContextBox } from "./components/ContextBox";

export const App = () => (
    <div className={styles.base}>
        <header>YETRIC</header>
        <div className={styles.status}>Status</div>
        <main>
            <nav>
                <ul className={styles.navigation}>
                    <li>Hosme</li>
                    <li>Hosme</li>
                    <li>Hosme</li>
                    <li>Hosme</li>
                    <li>Hosme</li>
                    <li>Hosme</li>
                    <li>Hosme</li>
                    <li>Hosme</li>
                </ul>
            </nav>
            <article>
                <h1>Snowpack Starter Kit</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus consequuntur corporis distinctio dolor est, et,
                    nobis quaerat quas quibusdam quis sunt tenetur? Eveniet
                    expedita nihil numquam. Aliquam consectetur reiciendis
                    tenetur.
                </p>
                <h2>iPhone 13 will be Awesome</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto cupiditate dolore eius, esse eum impedit
                    magni maxime nam natus nemo nobis, officiis quas quis
                    repudiandae sequi sint sunt! Magni.
                </p>

                <h3>10 Reasons to Sell Your Galaxy Right Now</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto cupiditate dolore eius, esse eum impedit
                    magni maxime nam natus nemo nobis, officiis quas quis
                    repudiandae sequi sint sunt! Magni.
                </p>

                <h4> Adipisci architecto cupiditate dolore</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto cupiditate dolore eius, esse eum impedit
                    magni maxime nam natus nemo nobis, officiis quas quis
                    repudiandae sequi sint sunt! Magni.
                </p>

                <h5>Another sub sub sub sub header</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto cupiditate dolore eius, esse eum impedit
                    magni maxime nam natus nemo nobis, officiis quas quis
                    repudiandae sequi sint sunt! Magni.
                </p>

                <h6>Another sub sub sub sub sub header</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto cupiditate dolore eius, esse eum impedit
                    magni maxime nam natus nemo nobis, officiis quas quis
                    repudiandae sequi sint sunt! Magni.
                </p>
            </article>
            <aside>
                <ContextBox header={"Count it as something"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda, commodi distinctio dolorum ea eligendi ex iste
                    iure laudantium optio qui quibusdam quidem quis repellat
                    sapiente sequi, sit totam velit!
                </ContextBox>
                <ContextBox>
                    <h3>Count it as something</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda, commodi distinctio dolorum ea eligendi ex iste
                    iure laudantium optio qui quibusdam quidem quis repellat
                    sapiente sequi, sit totam velit!
                </ContextBox>
            </aside>
        </main>
        <footer>Footer</footer>
    </div>
);

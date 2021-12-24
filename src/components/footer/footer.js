import React from "react";
import "./footer.css";
import "../../css/normalize.css";
import "../../css/global.css";
import cat from "../../images/vibing-cat.gif"

export default props => (
    <>
        <section className="footer">
            <h4 className="footer__txt">
            <a rel="noopener noreferrer" target="_blank" href="https://www.tamu.edu/" className="footer__txt--link">Extra Link</a> · Merry Christmas! <a rel="noopener noreferrer" target="_blank" href="https://amandayeh.com" ><img className="footer__img" src={cat} alt="Gif of vibing cat."/></a>
            </h4>
        </section>
    </>
);  
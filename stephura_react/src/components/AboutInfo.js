import React from "react";
import logo from "./img/logo.png"

export default function AboutInfo() {
    return (
        <div className="about">
            <div className="about__item">
                <img className="about__logo" src={logo} alt="logo"/>
                <p className="about__info">
                    <b>Stephura</b> to serwis ogłoszeniowy z roślinami doniczkowymi, akcesoriami ozdobnymi oraz akcesoriami do pielęgnacji roślin - <i>od hobbystów dla hobbystów</i>. Przeglądaj spośród różnych <b>ofert</b> w celu znalezienia tej <b>idealnej</b> dla <b>Ciebie</b>.
                </p>
                <p className="about__info">
                    W <b>Stephura</b> wybeirać możesz interesujące roślny i akcesoria wystawione przez innych użytkowników. Możesz również sam wystawić ogłoszenie swojej roślny!
                </p>
                <p className="about__info">
                    W naszym kraju sieć centrów ogrodniczych jest słabo rozwinięta, a wybór w sklepach stacjonarnych ubogi – dlatego możesz już tu i teraz dzielić się swoimi roślinami z innymi.
                </p>
            </div>
        </div>  
    )
}
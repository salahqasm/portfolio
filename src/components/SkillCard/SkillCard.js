import React from "react";
import "./SkillCard.css"
function SkillCard({ skill }) {

    return <div class="card">
        <h3 class="card__title">{skill.skillname}
        </h3>
        <p class="card__content">{skill.description}</p>
    </div>
}
export default SkillCard;

import React from 'react'

import "./style.css"

const SkillCard = (props) => {

    const advancedBadges = props.advancedEntries.map(entry => {
        return <p key={`advanced-${entry}`} className="badge badge-success mb-0">{entry}</p>
    });

    const middleBadges = props.middleEntries.map(entry => {
        return <p key={`middle-${entry}`} className="badge badge-warning mb-0">{entry}</p>
    });

    const begginerBadges = props.begginerEntries.map(entry => {
        return <p key={`begginer-${entry}`} className="badge badge-danger mb-0">{entry}</p>
    });

    const elementalBadges = props.elementalEntries.map(entry => {
        return <p key={`elemental-${entry}`} className="badge badge-secondary mb-0">{entry}</p>
    });

    return (
        <div className="skillcard p-3 mb-3 border border-secondary rounded">

            <div className="row ml-1 mr-1 mbM-2">
                <div className="lh-100 p-1 mrM-auto">
                    <h5 className="text-uppercase mb-0 text-left-when-desktop-center-when-phone">{props.name}</h5>
                </div>
                <div className="lh-100 pt-0 ml-auto text-right-when-desktop-center-when-phone">
                    <p className="ml-1 mb-0 lh-100 badge badge-success">{props.advanced}</p>
                    <p className="ml-1 mb-0 lh-100 badge badge-warning">{props.middle}</p>
                    <p className="ml-1 mb-0 lh-100 badge badge-danger">{props.begginer}</p>
                    <p className="ml-1 mb-0 lh-100 badge badge-secondary">{props.elemental}</p>
                </div>
            </div>

            <h5 className="mb-0 text-left-when-desktop-center-when-phone">
                {advancedBadges}
                {middleBadges}
                {begginerBadges}
                {elementalBadges}
            </h5>

        </div>
    );
}

export default SkillCard;
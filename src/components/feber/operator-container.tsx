import React from 'react'
import classes from './operator-container.module.css'
import BadgeBoard from '../badge-board/badge-board'
import CtaContainer from './cta-container'
import PerksContainer from './perks-container'
import Rating from './rating'
import BonusContainer from './bonus-container'

import { Casino, Hotel } from "@/types/types";
import LogoContainer from './logo-container'

interface ItemProps {
    item: Casino | Hotel
}


export default function OperatorContainer({ item }: ItemProps) {

    const { title, logoObject, rating, excerpt, positive1, positive2, turnoverBonus, turnoverFreeSpins, perks, badges, affiliateLink, reviewLink } = item;

    return (
        <main>

            <div className={classes["operator-container"]}
                 style={{ borderColor: logoObject.backgroundColor }}   
            >
                <div className={classes["logo-container"]}  style={{ backgroundColor: logoObject.backgroundColor}} ><LogoContainer logoObject={logoObject}/></div>
                <div className={classes["bonus-container"]}>
                    <BonusContainer title={title} turnoverBonus={turnoverBonus} turnoverFreeSpins={turnoverFreeSpins} positive1={positive1} positive2={positive2} />
                </div>
                <div className={classes["rating-container"]}>
                    <Rating rating={rating}></Rating>
                </div>
                <BadgeBoard className={classes["badges-container"]} badges={badges}/>
                <CtaContainer className={classes["cta-container"]} affiliateLink={affiliateLink} reviewLink={reviewLink} />
                <PerksContainer className={classes["perks-container"]} perks={perks}></PerksContainer>

            </div>
            <div className={classes["terms-container"]}></div>
        </main>
    )
}

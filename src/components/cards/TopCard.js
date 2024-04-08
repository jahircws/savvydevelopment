import { MdOutlineStar,MdLocationOn } from "react-icons/md";

export default function TopCard({item}) {
    return (
        <div className="SavingsExampleTiles__item clickable">
            <div className="SavingsExampleTiles__img" style={{backgroundImage: `url('${item.image}')`}}></div>
            <h3 className="SavingsExampleTiles__title t-title-large">San Diego Zoo</h3>
            <div className="SavingsExampleTiles__location t-body-large">
                <MdLocationOn className="icon__elem material-icons icon__xxs SavingsExampleTiles__location-icon" />
                Balboa Park
            </div>
            <div className="SavingsExampleTiles__rating t-body-large">
                <MdOutlineStar className="icon__elem material-icons icon__xs SavingsExampleTiles__rating-icon"/>
                <MdOutlineStar className="icon__elem material-icons icon__xs SavingsExampleTiles__rating-icon"/>
                <MdOutlineStar className="icon__elem material-icons icon__xs SavingsExampleTiles__rating-icon"/>
                <MdOutlineStar className="icon__elem material-icons icon__xs SavingsExampleTiles__rating-icon"/>
                <MdOutlineStar className="icon__elem material-icons icon__xs SavingsExampleTiles__rating-icon"/>4.9
            </div>
            <div className="SavingsExampleTiles__prices">
                <span className="t-headline-small">$115</span>
                <div className="t-display-med">$60</div>
            </div>
        </div>
    )
}
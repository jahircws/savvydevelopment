import { MdHotel, MdDirectionsCar, MdFlight } from "react-icons/md";

export default function BestDeals() {
    return (
        <div className="travel-landing__section">
            <h2 className="travel-landing__title t-headline-large">Unlock the Best Deals on the Internet</h2>
            <div className="ExploreInfoTiles">
                <div className="ExploreInfoTiles-tilesWrapper">
                    <div className="ExploreInfoTiles__item text-center">
                        <MdHotel className="icon__elem material-icons icon__lg ExploreInfoTiles__icon mx-auto"/>
                        <h3 className="ExploreInfoTiles__title t-title-large">4-star Hotels <br/>at 2-Star Prices </h3>
                        <div className="ExploreInfoTiles__body t-body-large">Save up to 50% on hotel rates, better than some of the most popular booking sites!</div>
                        <span className="button__elem ExploreInfoTiles__button">
                            <button type="button" className="primary-outlined round large primary-color">
                            <span className="button__label">View Hotels</span>
                            </button>
                        </span>
                    </div>
                    <div className="ExploreInfoTiles__item text-center">
                        <MdDirectionsCar className="icon__elem material-icons icon__lg ExploreInfoTiles__icon mx-auto"/>
                        <h3 className="ExploreInfoTiles__title t-title-large">Biggest Savings on <br/>Car Rentals </h3>
                        <div className="ExploreInfoTiles__body t-body-large">Need to get around? Now you can, for a fraction of the price. Save up to 25% on your next Car Rental.</div>
                        <span className="button__elem ExploreInfoTiles__button">
                            <button type="button" className="primary-outlined round large primary-color">
                            <span className="button__label">View Cars</span>
                            </button>
                        </span>
                    </div>
                    <div className="ExploreInfoTiles__item text-center">
                        <MdFlight className="icon__elem material-icons icon__lg ExploreInfoTiles__icon mx-auto"/>
                        <h3 className="ExploreInfoTiles__title t-title-large">Great Deals on Flights</h3>
                        <div className="ExploreInfoTiles__body t-body-large">Now you can afford to take the entire family on your next trip when you book through us.</div>
                        <span className="button__elem ExploreInfoTiles__button">
                            <button type="button" className="primary-outlined round large primary-color">
                            <span className="button__label">View Flights</span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
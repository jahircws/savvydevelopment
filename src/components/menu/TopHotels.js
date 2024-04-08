import TopCard from "../cards/TopCard";
import thotels from '@/data/top_hotels.json';

export default function TopHotels() {
    return (
        <div className="travel-landing__section">
            <h2 className="travel-landing__title t-headline-large">Top Hotels</h2>
            <div class="SavingsExampleTiles">
                <div class="SavingsExampleTiles-tilesWrapper">
                    {thotels.map(item=><TopCard key={item.id} item={item}/>)}
                </div>
                <button class="SavingsExampleTiles__cta" type="button">View More Hotels</button>
            </div>
        </div>
    )
}
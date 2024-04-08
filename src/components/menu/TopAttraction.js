import TopCard from "../cards/TopCard";
import tattattractions from '@/data/top_attractions.json';

export default function TopAttraction() {
    return (
        <div className="travel-landing__section">
            <h2 className="travel-landing__title t-headline-large">Top Attractions</h2>
            <div class="SavingsExampleTiles">
                <div class="SavingsExampleTiles-tilesWrapper">
                    {tattattractions.map(item=><TopCard key={item.id} item={item}/>)}
                </div>
                <button class="SavingsExampleTiles__cta" type="button">View More Activities</button>
            </div>
        </div>
    )
}
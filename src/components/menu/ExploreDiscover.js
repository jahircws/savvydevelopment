import discovers from '@/data/discover.json'
export default function ExploreDiscover() {

    return (
        <div className="travel-landing__section">
            <h2 className="travel-landing__title t-headline-large">Explore &amp; Discover</h2>

            <div className="ExploreTiles">
                <div className="ExploreTiles-tilesWrapper">
                    {discovers.map((explore, i) => (
                        <button key={i} role="link" className="TileImage TileImage-overlay TileImage-small clickable " title="Hotels">
                            <div className="TileImage-image  " style={{backgroundImage: `url('${explore.image}')`}}></div>
                            <div className="TileImage-text ">
                                <h4 className="TileImage-text-head t-label-large">{explore.title}</h4>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
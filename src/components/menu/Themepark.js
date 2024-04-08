import themeparks from '@/data/themepark.json';
export default function Themepark() {
    return (
        <div className="travel-landing__section">
            <h2 className="travel-landing__title t-headline-large">Save on Theme Parks</h2>
            <div className="travel-landing__theme_parks">
                <div className="ThemeParkTiles">
                    <div className="ThemeParkTiles-tilesWrapper tile-count-6">
                        {themeparks.map((tpark, i)=>(<button key={i} role="link" className="TileImage TileImage-stacked TileImage-small
                        clickable " title={tpark.fulltitle}>
                            <div className="TileImage-image  textTop" style={{backgroundImage: `url('${tpark.image}')`}}></div>
                            <div className="TileImage-text ">
                            <h4 className="TileImage-text-head t-label-large">{tpark.title}</h4>
                            <p className="TileImage-text-body t-body-med">{tpark.trade_off}</p>
                            </div>
                        </button>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
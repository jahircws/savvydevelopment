import category from '@/data/category.json';
import TravelStats from './TravelStats';
import ExploreDiscover from './ExploreDiscover';
import BestDeals from './BestDeals';
import Themepark from './Themepark';
import TopAttraction from './TopAttraction';
import TopHotels from './TopHotels';

export default function Travel() {
    // console.log("category: ",category)
    return (
        <section>
            <div id="banner" style={{backgroundImage: "url('https://booking.accessdevelopment.com/static/media/ce4faf4ee83cd650b9b2.webp')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div style={{alignItems: 'center', display: 'grid', height: 'inherit', position: 'relative', textAlign: 'center', height: 312 }}>
                    <div style={{backgroundColor: '#fff', padding: '0 20px', maxWidth: 512, margin: '0 auto', borderRadius: 8 }}>
                        <h1 className="travel-landing__heading t-headline-large my-3"><span>Travel More, </span> <span>Spend Less</span></h1>
                        <h3 className="travel-landing__subheading t-headline-small my-3">Discover Hidden Travel Discounts Not Available on Other Sites</h3>
                        <span className="button__elem travel-landing__heading-button" style={{marginBottom: 20}}>
                            <button type="button" className="primary round xlarge primary-color">
                                <span className="button__label">Start Saving</span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8 mx-auto my-3'>
                    <TravelStats/>
                    <ExploreDiscover/>
                </div>
            </div>
            <div className='row bg-customdark'>
                <div className='col-md-8 mx-auto'>
                    <BestDeals/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <Themepark/>
                    <TopAttraction/>
                    <TopHotels/>
                </div>
            </div>
        </section>
    )
}
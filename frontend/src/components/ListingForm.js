import React, {useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types'
import Autocomplete from 'react-google-autocomplete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Location from '@material-ui/icons/LocationOnOutlined'
import DateIcon from '@material-ui/icons/Event'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import People from '@material-ui/icons/PersonOutlined';

function ListingForm(props) {

    const [formData, setFormData] = useState({
        sale_type: 'For Sale', 
        price: '$0+',
        home_type: 'House',
        bathrooms: '0+',
        bedrooms: '0+',
        sqft: '1000+',
        days_listed: '1 or less',
        has_photos: '1+',
        open_house: false,
        keywords: ''
    })
    const {sale_type, price, home_type, bathrooms, bedrooms, sqft, 
    days_listed, has_photos, open_house, keywords} = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        };
        setLoading(true);
        axios.post(`${process.env.REACT_APP_API_URL}/api/listings/search`, {
            sale_type, price, home_type, bathrooms, bedrooms, sqft, 
            days_listed, has_photos, open_house: open_house.toString(), keywords
        })
        .then(res=> {
            setLoading(false);
            props.setListings(res.data);
            console.log(res.data);
            window.scrollTo(0,0)
        })
        .catch(errors=>{
            setLoading(false);
            window.scrollTo(0,0)
        })

    }
    return (
        <div>
            <div className="listingform_header row">
                <h1 class="text-6xl text-green-700">Search and reserve a safe place to sleep for the night</h1>
            </div>
            <form onSubmit={onSubmit} className="mb-4">
            <div className="row">
                <div className="col-1-of-4">
                    <Paper elevation={4} className="px-4 pb-2" >
                    <div className="label__form mb-3">
                        <Location style={{fontSize: 25}}/>
                        <span className="text-2xl pl-3">Location</span>
                    </div>
                        <Autocomplete class="outline-none w-56 h-56 text-xl"
                        style={{ height: '2rem'}} 
                        onPlaceSelected={(place) => {
                            console.log(place);
                        }}
                        types={['geocode', 'establishment']}
                        componentRestrictions={{country: "ca"}}
                        placeholder ="Where do you Live?"
                        autoFocus
                        />
                    </Paper>
                </div>
                <div className="col-1-of-4">
                    <Paper elevation={4} className="px-4 pb-2" >
                    <div className="label__form mb-3">
                        <DateIcon style={{fontSize: 24}}/>
                        <span className="text-2xl pl-3">CHECK IN DATE</span>
                    </div>
                    <div class="flex flex-row">
                        <div class="text-gray-500 flex-grow text-xl">Enter a Date</div>
                        <input 
                        className="outline-none text-xl"
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </div>
                    </Paper>
                </div>
                <div className="col-1-of-4">
                    <Paper elevation={4} className="px-4 pb-2" >
                    <div className="label__form mb-3">
                        <People style={{fontSize: 25}}/>
                        <span className="text-2xl pl-3">Shelters Seekers</span>
                    </div>
                    <input 
                        className="outline-none text-xl w-full"
                        id="date"
                        type="number"
                        placeholder="Number of People needing shelter"
                        />
                    </Paper>
                </div>
                <div className="col-1-of-4 justify-between">
                    <Button variant="contained" className="listingform__button listingform__button--primary" style={{backgroundColor: "#328da8"}} >
                        <SearchIcon style = {{color: '#fff', fontSize: 25}}/> 
                        <Typography noWrap style = {{color: '#fff'}}>Search</Typography> 
                    </Button>
                </div>
            </div>
            </form>

            <section className="Covid">
                <div className="row flex justify-center">
                    <Paper elevation={0} className="px-4 pb-2 border-yellow-500 border-2 border-l-4 w-full" >
                        Some Covid 19 tips
                    </Paper>
                </div>
            </section>
            <form onSubmit={onSubmit} className="lisitingform">
                <div className="row">
                    <div className="col-1-of-6">
                        <div className="listingform__section">
                            <label htmlFor="sale_type" className="listingform__label">
                                Sale or Rent
                            </label>
                            <select name="sale_type" onChange={onChange} className="listingform__select"
                            value={sale_type}>
                                <option>For Sale</option>
                                <option>For Rent</option>
                            </select>
                        </div>
                        <div className="listingform__section">
                            <label htmlFor="sqft" className="listingform__label">
                                Sqft
                            </label>
                            <select name="sqft" onChange={onChange} className="listingform__select"
                            value={sqft}>
                                <option>1000+</option>
                                <option>1200+</option>
                                <option>1500+</option>
                                <option>2000+</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-1-of-6">
                        <div className="listingform__section">
                            <label htmlFor="price" className="listingform__label">
                               Minimum Price
                            </label>
                            <select name="price" onChange={onChange} className="listingform__select"
                            value={price}>
                                <option>$0+</option>
                                <option>$200,000+</option>
                                <option>$400,000+</option>
                                <option>$600,000+</option>
                                <option>$800,000+</option>
                                <option>$1,000,000+</option>
                                <option>$1,200,000+</option>
                                <option>$1,500,000+</option>
                                <option>Any</option>
                            </select>
                        </div>
                        <div className="listingform__section">
                            <label htmlFor="days_listed" className="listingform__label">
                               Days Listed
                            </label>
                            <select name="days_listed" onChange={onChange} className="listingform__select"
                            value={days_listed}>
                                <option>1 or less</option>
                                <option>2 or less</option>
                                <option>5 or less</option>
                                <option>10 or less</option>
                                <option>20 or less</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>

                    
                    <div className="col-1-of-6">
                        <div className="listingform__section">
                            <label htmlFor="bedrooms" className="listingform__label">
                               Bedrooms
                            </label>
                            <select name="bedrooms" onChange={onChange} className="listingform__select"
                            value={bedrooms}>
                                <option>0+</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                <option>Any</option>
                            </select>
                        </div>
                        <div className="listingform__section">
                            <label htmlFor="has_photos" className="listingform__label">
                               Has Photos
                            </label>
                            <select name="has_photos" onChange={onChange} className="listingform__select"
                            value={has_photos}>
                                <option>1+</option>
                                <option>3+</option>
                                <option>5+</option>
                                <option>10+</option>
                                <option>15+</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-1-of-6">
                        <div className="listingform__section">
                            <label htmlFor="home_type" className="listingform__label">
                               Home Type
                            </label>
                            <select name="home_type" onChange={onChange} className="listingform__select"
                            value={home_type}>
                                <option>House</option>
                                <option>Condo</option>
                                <option>Townhouse</option>
                            </select>
                        </div>
                        <div className="listingform__section">
                            <label htmlFor="keywords" className="listingform__label">
                              Keywords
                            </label>
                            <input type="text" name="keywords" className="listingform__input"
                            onChange={onChange} value={keywords}/>
                        </div>
                    </div>

                    <div className="col-1-of-6">
                        <div className="listingform__section">
                            <label htmlFor="bathrooms" className="listingform__label">
                               Baths
                            </label>
                            <select name="bathrooms" onChange={onChange} className="listingform__select"
                            value={bathrooms}>
                                <option>0+</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>Any</option>
                            </select>
                        </div>
                        <div className="listingform__altsection">
                            <label htmlFor="open_house" className="listingform__label">
                               Open House
                            </label>
                            <input type="checkbox" name='open_house'
                            checked={open_house} onChange={(e)=> setFormData({
                                ...formData, open_house: e.target.checked
                            })}
                            className="listingform__checkbox"/>
                        </div>
                    </div>

                    <div className="col-1-of-6">
                        {loading ?
                        <div className="listingform__loader">
                            <Loader type="Oval"
                            color='#424242'
                            height={50}
                            width={50} />
                        </div> :
                        <button type='submit' className="listingform__button listingform__button--primary">Save</button>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

ListingForm.propTypes= {
    setListings: PropTypes.func.isRequired
}


export default ListingForm

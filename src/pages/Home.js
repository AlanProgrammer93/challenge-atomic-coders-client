import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from '../components/Modal';

const Home = () => {
    const [DateSelected, setDateSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null)
    
    const onChange = (date) => {
        setDateSelected(date)
        setShowModal(true)
    }

    const weekend = ({date}) => {
        return date.getDay() === 0 || date.getDay() === 6
    }

    useEffect(() => {
        getPhoto()
    }, [])

    const getPhoto = async () => {
        const {data} = await axios.get('https://api.unsplash.com/photos/random/?client_id=yG4ZmxplXFFeswWZ4xsIlEao5RSRp7lsDbhSD-2QnDM')
        setImage(data.urls.full);
    }

    return (
        <div className="home-page">
            <img 
                className="home-image"
                src={image}
                alt=""
            />
            <Calendar
                onChange={onChange}
                value={new Date()}
                minDate={new Date()}
                view={'month'}
                tileDisabled={weekend}
            />
            {
                showModal && <Modal DateSelected={DateSelected} onClose={() => setShowModal(false)} />
            }
        </div>
    )
}

export default Home

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        axios
        .get("http://localhost:5000/advertise")
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
    }, []);console.log(data);

    return (
        <div>
            {data.length > 0 ? 
                <div>
                    <h2 className='ml-20 mt-20 mb-5 font-bold text-4xl'>Advertisement</h2>
                </div> : <></>
            }
            <div className='flex flex-wrap justify-around my-10'>
                {
                    data.map(advertise => <AdvertiseCard
                    key={advertise._id}
                    advertise={advertise}
                    ></AdvertiseCard> )
                }
            </div>
        </div>
    );
};

export default Advertise;
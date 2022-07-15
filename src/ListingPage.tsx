import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import Carousel from './Common/Carousel';
import { MdLocationOn } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';

export default function ListingPage() {
    const { id } = useParams();
    const { listings } = useStateContext();
    const [listing, setListing] = useState(listings.find((listing) => String(listing.id) === String(id)));

    useEffect(() => {
        setListing(listings.find((listing) => String(listing.id) === String(id)));
    }, [listings, id]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items  justify-items-center px-5 pt-5 sm:px-0">
            <div className="flex flex-col items-start w-full">
                <div className="desktop hidden sm:block w-6/12">
                    <Carousel
                        images={listing && listing.images.length > 0 ? listing.images.map((image) => image.url) : []}
                    />
                </div>
                <div>
                    <h1 className=" text-2xl  font-medium overflow-hidden   ">{listing && listing.name}</h1>
                    <span className="flex items-center gap-2">
                        <MdLocationOn />
                        <p className="text-center">{listing && listing.address}</p>
                    </span>
                    {listing && listing.rating && (
                        <Box display="flex" mt="2" alignItems="center" justifySelf={'start'}>
                            {Array(+listing.rating)
                                .fill('')
                                .map((_, i) => (
                                    <AiFillStar key={i} color={i < +listing.rating ? 'teal.500' : 'gray.300'} />
                                ))}
                            <Box as="span" ml="2" fontSize="sm" fontWeight={'bold'}>
                                {listing && listing.rating} Star rating
                            </Box>
                        </Box>
                    )}
                    <p className=" text-3xl font-normal">₹{listing && listing.price}</p>
                </div>
                <div className="mobile sm:hidden">Mobile</div>
            </div>
            <div>
                <p>{listing && listing.description}</p>
            </div>
        </div>
    );
}

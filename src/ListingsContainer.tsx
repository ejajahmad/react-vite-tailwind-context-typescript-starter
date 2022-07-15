import React from 'react';
import { useStateContext } from '../context/StateContext';
import ListingCard from './Common/ListingCard';

export default function ListingsContainer() {
    const { listings } = useStateContext();
    return (
        <div className="grid items-start justify-center grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
            {listings.map((listing) => (
                <ListingCard listing={listing} />
            ))}
        </div>
    );
}

import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../src/Services/firebaseConfig';
import { onValue, ref, set } from 'firebase/database';
import { ListingType } from '../typings';

type StateContextType = {
    listings: ListingType[];
    setListings: React.Dispatch<React.SetStateAction<ListingType[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<StateContextType>({
    listings: [],
    setListings: () => {},
    loading: false,
    setLoading: () => {},
});

type Props = {
    children: React.ReactNode;
};

export const StateContext = ({ children }: Props) => {
    const [loading, setLoading] = useState(true);
    const [listings, setListings] = useState<ListingType[]>([]);

    useEffect(() => {
        const listingsDataRef = ref(database, 'listings/');
        onValue(listingsDataRef, (snapshot) => {
            const data = snapshot.val();
            console.log('ListingData: ', data);
            setListings(Object.values(data));

            // Set Analytics

            set(ref(database, 'analytics/'), {
                totalListings: Object.values(data).length,
                totalLeads: 0,
                totalBookings: 0,
                totalRevenue: 0,
            })
                .then(() => {
                    console.log('Data written successfully!');
                })
                .catch((error) => {
                    console.error('Error writing document: ', error);
                });

            setLoading(false);
        });
    }, []);

    return (
        <Context.Provider
            value={{
                listings,
                setListings,
                loading,
                setLoading,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = (): StateContextType => useContext(Context);

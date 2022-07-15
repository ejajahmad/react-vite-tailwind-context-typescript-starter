type ListingImageType = {
    id: number;
    url: string;
};

type ListingRoomType = {
    id: number;
    name: string;
    price: number;
};

type ListingNearbyType = {
    id: number;
    name: string;
    distance: number;
};

type ListingType = {
    id: string | null;
    createdAt: string;
    name: string;
    type: string;
    price: number;
    rating: number;
    description: string;
    roomsAvailable: number;
    address: string;
    phone: number;
    email: string;
    amenities: string[];
    rooms: ListingRoomType[];
    images: ListingImageType[];
    nearby: ListingNearbyType[];
    seo: {
        metaTitle: string;
        metaDescription: string;
        metaKeyword: string;
    };
};

export type { ListingType, ListingRoomType, ListingImageType, ListingNearbyType };

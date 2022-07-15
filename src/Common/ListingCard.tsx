import { Badge, Box, Image } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { ListingType } from '../../typings';

type ListingCardProps = {
    listing: ListingType;
};

export default function ListingCard({ listing }: ListingCardProps) {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    };

    return (
        <Box className="mx-auto" maxW="sm" minH="xs" borderRadius="lg" overflow="hidden">
            <Image
                minH="250px"
                minW="full"
                objectFit="cover"
                borderRadius="lg"
                src={listing.images[0].url}
                alt={listing.name}
            />

            <Box p="6" px={0}>
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" bgColor={'#FF4471'} textColor="white">
                        {/* @ts-ignore */}
                        {listing?.discount ? listing?.discount : listing.type}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {/* {listing.type} */}
                        {listing.amenities &&
                            listing.amenities.length > 0 &&
                            [...listing.amenities.slice(0, 2)].map((amenity, i) => (
                                <span key={amenity + i}>&bull;{amenity}</span>
                            ))}
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                    {listing.name}
                </Box>
                <Box mt="1" fontWeight="normal" as="h5" lineHeight="tight" noOfLines={1}>
                    {listing.address}
                </Box>

                <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        ₹
                    </Box>
                    {listing.price}/night
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                    {Array(+listing.rating)
                        .fill('')
                        .map((_, i) => (
                            <AiFillStar key={i} color={i < +listing.rating ? 'teal.500' : 'gray.300'} />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {listing.rating} stars
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

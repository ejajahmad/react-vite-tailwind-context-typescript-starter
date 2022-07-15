import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { BsDot } from 'react-icons/bs';
type Props = {
    images: string[];
};

export default function Carousel({ images }: Props) {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImage((currentImage) => (currentImage - 1 + images.length) % images.length);
    };

    const handleImageClick = (index: number) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        console.log('Current Image', currentImage);
    }, [currentImage]);

    return (
        <div className="w-full h-full">
            <motion.div className="flex justify-center items-center " initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Image minH="250px" minW="full" objectFit="cover" borderRadius="lg" src={images[currentImage]} />
            </motion.div>
            <div className="w-full flex justify-between items-center py-3">
                <GrFormPrevious
                    role="button"
                    size={24}
                    className=" text-black hover:text-gray-500"
                    onClick={handlePrevious}
                />

                <div className="flex">
                    {images.map((image, i) => (
                        <BsDot
                            key={i}
                            size={24}
                            className={`text-black ${i === currentImage ? 'text-gray-500' : 'text-gray-400'}`}
                            onClick={() => handleImageClick(i)}
                        />
                    ))}
                </div>

                <GrFormNext
                    role="button"
                    size={24}
                    className=" text-black hover:text-gray-500   "
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}

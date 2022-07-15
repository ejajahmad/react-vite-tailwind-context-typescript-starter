import React from 'react';
import { Spinner } from '@chakra-ui/react';

export default function OverlaySpinner() {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black opacity-40 w-screen h-screen">
            <Spinner size="xl" thickness="4px" speed="0.8s" color="white" />
        </div>
    );
}

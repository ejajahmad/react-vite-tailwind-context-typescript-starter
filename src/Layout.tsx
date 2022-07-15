import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return <div className=" max-w-7xl mx-auto">{children}</div>;
}

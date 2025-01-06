import React, { useState } from "react";
import { Skeleton, SkeletonProps } from "@mantine/core";

export interface ImageSkeletonProps extends SkeletonProps {
    children: React.ReactElement<
        React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    >;
}

export const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ children, ...props }) => {
    const [isLoading, setLoading] = useState(true);

    const imageWithLoader = React.cloneElement(children, {
        ...children.props,
        onLoad: () => setLoading(false),
    });

    return (
        <Skeleton
            visible={isLoading}
            {...props}
        >
            {imageWithLoader}
        </Skeleton>
    );
};

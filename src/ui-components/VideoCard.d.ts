/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoCardOverridesProps = {
    VideoCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$50 USD / day"?: PrimitiveOverrideProps<TextProps>;
    "Car Model - Car Name"?: PrimitiveOverrideProps<TextProps>;
    "Car Description"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VideoCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    videoArea?: React.ReactNode;
} & {
    overrides?: VideoCardOverridesProps | undefined | null;
}>;
export default function VideoCard(props: VideoCardProps): React.ReactElement;

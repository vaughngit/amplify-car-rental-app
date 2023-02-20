/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoCard2OverridesProps = {
    VideoCard2?: PrimitiveOverrideProps<FlexProps>;
    video?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$50 USD / day"?: PrimitiveOverrideProps<TextProps>;
    "Car Model - Car Name"?: PrimitiveOverrideProps<TextProps>;
    "Car Description"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VideoCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: VideoCard2OverridesProps | undefined | null;
}>;
export default function VideoCard2(props: VideoCard2Props): React.ReactElement;

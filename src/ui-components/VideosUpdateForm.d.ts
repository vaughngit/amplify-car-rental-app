/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Videos } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideosUpdateFormInputValues = {
    url?: string;
    item?: string;
    title?: string;
    filename?: string;
    label?: string;
};
export declare type VideosUpdateFormValidationValues = {
    url?: ValidationFunction<string>;
    item?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    label?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideosUpdateFormOverridesProps = {
    VideosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    label?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideosUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    videos?: Videos;
    onSubmit?: (fields: VideosUpdateFormInputValues) => VideosUpdateFormInputValues;
    onSuccess?: (fields: VideosUpdateFormInputValues) => void;
    onError?: (fields: VideosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideosUpdateFormInputValues) => VideosUpdateFormInputValues;
    onValidate?: VideosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideosUpdateForm(props: VideosUpdateFormProps): React.ReactElement;

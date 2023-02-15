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
    titl?: string;
    filename?: string;
    item?: string;
    url?: string;
    label?: string;
};
export declare type VideosUpdateFormValidationValues = {
    titl?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    item?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    label?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideosUpdateFormOverridesProps = {
    VideosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titl?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
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

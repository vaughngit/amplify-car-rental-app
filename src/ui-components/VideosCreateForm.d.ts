/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideosCreateFormInputValues = {
    url?: string;
    item?: string;
    title?: string;
    filename?: string;
    label?: string;
};
export declare type VideosCreateFormValidationValues = {
    url?: ValidationFunction<string>;
    item?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    label?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideosCreateFormOverridesProps = {
    VideosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    label?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideosCreateFormProps = React.PropsWithChildren<{
    overrides?: VideosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideosCreateFormInputValues) => VideosCreateFormInputValues;
    onSuccess?: (fields: VideosCreateFormInputValues) => void;
    onError?: (fields: VideosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideosCreateFormInputValues) => VideosCreateFormInputValues;
    onValidate?: VideosCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideosCreateForm(props: VideosCreateFormProps): React.ReactElement;

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
    titl?: string;
    filename?: string;
    item?: string;
    url?: string;
    label?: string;
};
export declare type VideosCreateFormValidationValues = {
    titl?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    item?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    label?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideosCreateFormOverridesProps = {
    VideosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titl?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
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

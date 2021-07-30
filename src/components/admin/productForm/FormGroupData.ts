import {IFormGroup} from "../../../types/MainTypes";

export const FormGroups: IFormGroup [] = [

    {
        name: "product-name",
        label: "Product Name",
        type: "text",
        error: null,
        value: ""
    },
    {
        name: "product-type",
        label: "Product Type",
        type: "text",
        error: null,
        value: ""
    },
    {
        name: "product-price",
        label: "Product Price",
        type: "number",
        error: null,
        value: ""
    },
    {
        name: "product-offer-price",
        label: "Product Offer Price",
        type: "number",
        error: null,
        value: ""
    },
    {
        name: "product-expire-date",
        label: "Product Expire Data",
        type: "date",
        error: null,
        value: ""
    },
    {
        name: "product-description",
        label: "Product Description",
        type: "text",
        error: null,
        value: ""
    }

]
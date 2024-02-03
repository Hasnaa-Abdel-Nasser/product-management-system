import { IProduct } from "../interfaces";
import { initialError } from "../utils";

export const validationInputs = (product: IProduct)=>{
    const {title , description , imageURL , price} = product;
    const errors= initialError();

    const imageValid = (/^(http|https):\/\/[^ "]+$/i).test(noTrim(imageURL));

    if(noTrim(title).length <  10 || noTrim(title).length > 80){
        errors.title="Product title must be between 10 and 80 characters!";
    }

    if(noTrim(description).length <  10 || noTrim(description).length > 900){
        errors.description="Product description must be between 10 and 900 characters!";
    }

    if(!imageValid){
        errors.imageURL = "Valid image URL is required";
    }
    
    if(noTrim(price).length <= 0 || isNaN(+noTrim(price))){
        errors.price="Valid price is required!";
    }
    return errors;
}
const noTrim = (text:string)=>text.trim()
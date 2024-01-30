
export const validationInputs = (product:{title :string, description:string , imageURL:string , price:string})=>{
    const {title , description , imageURL , price} = product;
    const errors={
        title:"",
        description:"",
        imageURL:"",
        price:""
    };
    let foundErrors = false;
    const imageValid = (/^(http|https):\/\/[^ "]+$/i).test(notTrim(imageURL));
    if(notTrim(title).length <  10 || notTrim(title).length > 80){
        errors.title="Product title must be between 10 and 80 characters!";
        foundErrors=true;
    }
    if(notTrim(description).length <  10 || notTrim(description).length > 900){
        errors.description="Product description must be between 10 and 900 characters!";
        foundErrors=true;
    }
    if(!imageValid){
        errors.imageURL = "Valid image URL is required";
        foundErrors=true;
    }
    if(notTrim(price).length <= 0 || isNaN(+notTrim(price))){
        errors.price="Valid price is required!";
        foundErrors=true;
    }
    return (!foundErrors)?false:errors
}
const notTrim = (text:string)=>text.trim()
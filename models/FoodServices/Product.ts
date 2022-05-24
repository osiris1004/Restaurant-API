import mongoose, {Schema, Document, Model} from "mongoose" ;

const productSchema = new Schema({
    product_name : {
        type : Schema.Types.String,
        required : true,
        unique : true,
    },
    price : {
        type : Schema.Types.Number,
        required : true
    }
});

export interface productProps {
    product_name : string ,
    price : number
}
export type ProductDocument = productProps & Document ;
export const ProductModel : Model<ProductDocument> = mongoose.model<ProductDocument>("ProductModel",productSchema)


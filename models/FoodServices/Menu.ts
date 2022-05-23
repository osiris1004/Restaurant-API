import mongoose, {Schema, Document, Model} from "mongoose"
import {productProps} from "./Product";

const menuSchema = new Schema({
    menu_name : {
        type : Schema.Types.String,
        required : true
    },
    products : [{
        type: Schema.Types.ObjectId,
        ref: "ProductModel"
    }],
    price : {
        type : Schema.Types.Number,
        required : true
    }
});

export interface menuProps{
    menu_name : string ,
    products : productProps[],
    price : number
}
export type MenuDocument = menuProps & Document ;
export const MenuModel : Model<MenuDocument> = mongoose.model<MenuDocument>("Menu",menuSchema)


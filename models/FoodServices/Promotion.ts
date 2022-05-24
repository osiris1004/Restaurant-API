import mongoose, {Schema, Document, Model} from "mongoose" ;
import {productProps} from "./Product";
import {menuProps} from "./Menu";

const promoSchema = new Schema({
    specialProducts : {
        type : Schema.Types.String,
        required : true,
        unique : true,
    },
    specialMenus : {
        type : Schema.Types.Number,
        required : true
    },
    reduction : {
        type : Schema.Types.Number,
        min : 0,
        max : 100
    }
});

export interface promoProps {
    specialProduct : productProps[],
    specialMenu : menuProps[],
    reduction : number
}
export type PromoDocument = promoProps & Document ;
export const PromoModel : Model<PromoDocument> = mongoose.model<PromoDocument>("PromoModel",promoSchema)

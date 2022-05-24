import mongoose, {Schema, Document, Model} from "mongoose"
import {promoProps} from "./Promotion";
import {preparatorProps} from "../Transverse/Preparator";
import {orderProps} from "./Order";
import {productProps} from "./Product";

const restoSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    boss : {
        types : Schema.Types.String,
        required : true
    },
    admin : {
        type : Schema.Types.String,
        required : true,
    },
    promo : [{
        type : Schema.Types.ObjectId,
        ref : "PromoModel",
        required : true,
    }],
    preparators : [{
        type : Schema.Types.ObjectId,
        ref : "PreparatorModel",
        required : true,
    }],
    orders : [{
        type : Schema.Types.ObjectId,
        ref : "OrderModel",
    }],
    putToFront : [{
        type : Schema.Types.ObjectId,
        ref : "ProductModel" ,
        required : true
    }]
})
export interface restoProps {
    name : string,
    boss : string,
    admin : string,
    promo : promoProps[],
    preparators : preparatorProps[],
    orders : orderProps[],
    putToFront : productProps[]
}
export type RestoDocument = restoProps & Document ;
export const RestoModel : Model<RestoDocument> = mongoose.model<RestoDocument>("RestoModel",restoSchema)

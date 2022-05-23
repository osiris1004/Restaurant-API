import moogose, {Schema,Document,Model} from "mongoose"
import {productProps} from "./Product";
import mongoose from "mongoose";
import {menuProps} from "./Menu";
import {customerProps} from "../Transverse/Customer";
import {preparatorProps} from "../Transverse/Preparator";
import {restoProps} from "./Resto";

const orderSchema = new Schema({
    order_number : Number ,
    linkedResto : [{
        type : Schema.Types.ObjectId,
        required : true,
        ref : "RestoModel"
    }],
    products : [{
        type : Schema.Types.ObjectId,
        required : true ,
        ref : "ProductModel"
    }],
    menus : [{
        types : Schema.Types.ObjectId,
        required : true ,
        ref : "MenuModel"
    }]
    ,
    isPrepared : {
        types : Schema.Types.Boolean,
        default : false
    },
    preparator : {
        type : Schema.Types.ObjectId,
        ref : "PreparatorModel",
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : "CustomerModel",
    },
    wantDelivery : {
        types : Schema.Types.Boolean ,
        default : false
    },
})

export interface orderProps{
    order_number : Number ,
    linkedResto : restoProps[],
    products : productProps[],
    menus : menuProps[],
    isPrepared : boolean,
    preparator : preparatorProps,
    customer : customerProps,
    wantDelivery : boolean,
}
export type OrderDocument = orderProps & Document ;
export const OrderModel : Model<OrderDocument> = mongoose.model<OrderDocument>("Order",orderSchema)

import mongoose, {Schema, Document, Model} from "mongoose"
import {customerProps} from "../Transverse/Customer";
import {orderProps} from "./Order";
import {riderProps} from "../Transverse/Rider";

const deliverySchema = new Schema({
    order : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "OrderModel"
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : "CustomerModel",
    },
    rider : {
        type : Schema.Types.ObjectId,
        ref : "RiderModel",
    },
    isDelivered : {
        types : Schema.Types.Boolean ,
        default : false
    },
})
export interface deliveryProps{
    order : orderProps,
    customer :customerProps
    rider : riderProps,
    isDelivered : boolean
}
export type DeliveryDocument = deliveryProps & Document ;
export const DeliveryModel : Model<DeliveryDocument> = mongoose.model<DeliveryDocument>("DeliveryModel",deliverySchema)

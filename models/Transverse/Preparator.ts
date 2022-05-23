import mongoose, {Schema, Document, Model} from "mongoose"
import {orderProps} from "../FoodServices/Order";
const preparatorSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    commands : [{
        types : Schema.Types.ObjectId,
        ref : "OrderModel"
    }]
})

export interface preparatorProps{
    name : string ,
    commands : orderProps[] ,
}
export type PreparatorDocument = preparatorProps & Document ;
export const PreparatorModel : Model<PreparatorDocument> = mongoose.model<PreparatorDocument>("Preparator",preparatorSchema)

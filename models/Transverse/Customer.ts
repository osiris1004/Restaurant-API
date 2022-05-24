import mongoose, {Schema, Document, Model} from "mongoose"

const customerSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    command_number : {
        types : Schema.Types.Number,
        required : true
    },
    //Adresse necessaire si livraison
    adress : {
        type : Schema.Types.String,
        required : true,
    },
    phone : {
        type : Schema.Types.Number,
        required : true,
        default : 0 ,
    }
})
export interface customerProps{
  name : string ,
  command_number : number ,
  adress : string,
  phone : number
}
export type CustomerDocument = customerProps & Document ;
export const CustomerModel : Model<CustomerDocument> = mongoose.model<CustomerDocument>("CustomerModel",customerSchema)

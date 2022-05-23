import mongoose, {Schema, Document, Model} from "mongoose"

const riderSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    command_number : {
        types : Schema.Types.Number,
        required : true
    },
    distanceFromResto : {
        type : Schema.Types.Number,
        required : true,
    },
    phone : {
        type : Schema.Types.Number,
        required : true,
    }
})
export interface riderProps{
    name : string ,
    command_number : number ,
    distanceFromResto : number,
    phone : number
}
export type RiderDocument = riderProps & Document ;
export const RiderModel : Model<RiderDocument> = mongoose.model<RiderDocument>("Rider",riderSchema)

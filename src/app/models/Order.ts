import { model, Schema } from "mongoose";

export const Order = model('Order',new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["WAITING","IN_PRODUCTION","DONE"],
    default: "WAITING"
  },
  createdAt: {
    type: Date,
    // Não precisamos executar a função, pois o mongoose fará isso por nós.
    // E irá usar o valor de retorno como valor padrão.
    default: Date.now
  },
  products: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product'
        },
        quantity: {
          type: Number,
          default: 1,
          required: true
        }
      }
    ],
    required: true
  },
}));

import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "Nombre del cliente esta basio."),
  total: z.number().min(1, "El total de la orden esta en cero."),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
});

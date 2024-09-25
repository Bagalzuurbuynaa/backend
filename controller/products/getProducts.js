import { sql } from "../../database";
 
 
 
export const addCustomer = async (request, response) => {
    const { firstName, lastName, email, address } = request.body;
  
    const customer =
      await sql`INSERT INTO Customers (firstName, lastName, email, address)
                VALUES (${firstName}, ${lastName}, ${email}, ${address})
                RETURNING *`;

export const getProducts = async (_request, response) => {
    const customers = await sql`SELECT * FROM customers`;
    response.status(200).json({
      message: "success",
      data: customers,
    });
  }
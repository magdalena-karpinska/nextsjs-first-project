// marks all the exported functions within the file as Server Actions.
// These server functions can then be imported and used in Client and Server components.

"use server";

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };
  console.log(rawFormData);
}

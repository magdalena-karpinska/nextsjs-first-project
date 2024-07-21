// marks all the exported functions within the file as Server Actions.
// These server functions can then be imported and used in Client and Server components.

"use server";

export async function createInvoice(formData: FormData) {}

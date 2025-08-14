"use server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

import { db } from "@/db";
import { ShippingAddressTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export async function getUserAddresses() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado");
  }

  try {
    const addresses = await db
      .select()
      .from(ShippingAddressTable)
      .where(eq(ShippingAddressTable.userId, session.user.id))
      .orderBy(ShippingAddressTable.createdAt);

    return addresses;
  } catch (error) {
    console.error("Erro ao buscar endereços:", error);
    throw new Error("Erro ao buscar endereços");
  }
}

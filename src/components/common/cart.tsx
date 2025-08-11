"use client";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";

import { getCart } from "@/actions/get-cart";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Cart = () => {
  const { data: cart, isPending: cartIsLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
  });
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <ShoppingBasketIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>
          <div className="px-5">
            {cartIsLoading && <div>Carregando...</div>}
            {cart?.items.length ? (
              cart.items.map((item) => (
                <div key={item.id} className="mb-4 flex justify-between">
                  <Image
                    src={item.productVariant.imageUrl}
                    alt={item.productVariant.product.name}
                    width={100}
                    height={100}
                  />
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">Your cart is empty</p>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;

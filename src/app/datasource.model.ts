import { Product } from "./product/product.model";

export class SimpleDataSource{
    private products:Product[]=[];

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Galaxy M31","Best phone","1.webp"),
            new Product(2,"Galaxy M32","Best phone","2.webp"),
            new Product(3,"Galaxy M33","Best phone","3.webp"),
            new Product(4,"Galaxy M34","Best phone","4.webp"),
            new Product(5,"Galaxy M35","Best phone","5.webp")
        )
    }

    getProducts():Product[]{
        return this.products;
    }
}
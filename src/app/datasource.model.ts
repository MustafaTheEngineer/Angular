import { Product } from "./product/product.model";

export class SimpleDataSource{
    private products:Product[]=[];

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Galaxy M31",2800,"Best phone","1.webp"),
            new Product(2,"Galaxy M32",4600,"Best phone","2.jpg"),
            new Product(3,"Galaxy M33",8400,"Best phone","3.jpg"),
            new Product(4,"Galaxy M34",10000,"Best phone","4.png"),
            new Product(5,"Galaxy M35",12500,"Best phone","5.jpg")
        )
    }

    getProducts():Product[]{
        return this.products;
    }
}
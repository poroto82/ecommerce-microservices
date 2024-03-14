interface ProductType {
    id: string;
    name: string;
    description: string;
    stock?: number;
    priceWithTax: number,
    priceWithoutTax: number
}

export default ProductType;
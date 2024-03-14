import ProductType from "../types/ProductType";


export default async function getAllProducts(startIndex: number, endIndex: number ): Promise<ProductType[]> {
    // Obtener productos de la caché si están disponibles
    const cachedProducts = getCachedProducts();
    if (cachedProducts) {
        return cachedProducts;
    }

    // Si no hay datos en caché, obtener productos del servicio
    const products = await fetchProductsFromService(startIndex, endIndex);
    const enrichedProductsPromises = products.map(p => enrichProduct(p));
    const enrichedProducts = await Promise.all(enrichedProductsPromises);
    
    // Guardar productos en caché para futuras solicitudes
    saveProductsToCache(enrichedProducts);
    
    return enrichedProducts;
}

// Función para obtener productos de la caché
function getCachedProducts(): ProductType[] | null {
    // Implementar lógica para obtener productos de la caché
    return null; // Devolver null si no hay datos en caché
}


async function fetchProductsFromService(startIndex: number, endIndex: number ): Promise<ProductType[]> {
    const response = await fetch(`http://product-hub:3000/api/products?startIndex=${startIndex}&endIndex=${endIndex}`);
    return await response.json();
}

// Función para enriquecer un producto
async function enrichProduct(product: ProductType): Promise<ProductType> {
    // Obtener datos de stock del servicio de stock
    const stock = await getStockForProduct(product);
    const price = await getPriceForProduct(product);
    
    return {
        ...product,
        stock: stock,
        priceWithTax: price.priceWithTax,
        priceWithoutTax: price.priceWithoutTax,
    };
}


async function getStockForProduct(product: ProductType): Promise<number> {
    const response = await fetch(`http://stock-hub:3000/api/${product.id}`);
    const stockResponse = await response.json()
    
    return stockResponse.quantity; 
}


async function getPriceForProduct(product: ProductType): Promise<any> {
    const response = await fetch(`http://price-hub:3000/api/${product.id}`);
    const priceResponse = await response.json()
    
    return priceResponse; 
}


function saveProductsToCache(products: ProductType[]): void {
    products.length

}
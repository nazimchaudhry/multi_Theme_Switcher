import { Product } from '../types/theme';

const API_BASE_URL = 'https://dummyjson.com';

// Transform DummyJSON product to our Product interface
const transformProduct = (product: any): Product => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.thumbnail || product.images?.[0] || 'https://via.placeholder.com/300x300?text=No+Image',
    rating: {
      rate: product.rating || 4.0,
      count: Math.floor(Math.random() * 1000) + 100 // Generate random count since DummyJSON doesn't have this
    }
  };
};

// Security: Input validation and sanitization
const validateProduct = (product: any): boolean => {
  return (
    typeof product.id === 'number' &&
    typeof product.title === 'string' &&
    typeof product.price === 'number' &&
    typeof product.description === 'string' &&
    typeof product.category === 'string'
  );
};

// Security: Sanitize HTML content
const sanitizeString = (str: string): string => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const sanitizeProduct = (product: Product): Product => {
  return {
    ...product,
    title: sanitizeString(product.title),
    description: sanitizeString(product.description),
    category: sanitizeString(product.category),
  };
};

export const fetchProducts = async (limit?: number): Promise<Product[]> => {
  try {
    const limitParam = limit || 20;
    const url = `${API_BASE_URL}/products?limit=${limitParam}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Security: Prevent credentials from being sent
      credentials: 'omit',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // DummyJSON returns data in { products: [...] } format
    const products = data.products || data;
    
    // Security: Validate and sanitize data
    if (!Array.isArray(products)) {
      throw new Error('Invalid response format');
    }

    const validProducts = products
      .filter(validateProduct)
      .map(transformProduct)
      .map(sanitizeProduct);

    return validProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products. Please try again later.');
  }
};

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!validateProduct(data)) {
      throw new Error('Invalid product data');
    }

    const product = transformProduct(data);
    return sanitizeProduct(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product. Please try again later.');
  }
};
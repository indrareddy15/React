## Products Schema

{
  _id: ObjectId,               // Auto-generated unique identifier
  name: String,                 // Product name
  description: String,          // Detailed product description
  price: Number,                // Price of the product
  currency: String,             // Currency of the price (e.g., "USD", "EUR")
  category: String,             // Product category (e.g., "electronics", "clothing")
  subcategory: String,          // Subcategory (optional, e.g., "smartphones", "shirts")
  stock_quantity: Number,       // Available stock quantity
  images: [String],             // Array of image URLs for the product
  weight: Number,               // Product weight (optional)
  dimensions: {                 // Optional: dimensions for shipping
    length: Number,             // Length in cm
    width: Number,              // Width in cm
    height: Number              // Height in cm
  },
  brand: String,                // Product brand name
  tags: [String],               // Tags for search and filtering (e.g., "sale", "new", "hot")
  is_active: Boolean,           // Boolean flag to indicate if the product is currently active/listed
  date_added: Date,             // Date when the product was added
  last_updated: Date,           // Date when the product details were last updated
  rating: {                     // Product rating details (optional)
    average: Number,            // Average customer rating (e.g., 4.5)
    count: Number               // Number of ratings
  },
  reviews: [                    // Array of customer reviews (optional)
    {
      customer_id: ObjectId,    // Reference to the customer who reviewed
      rating: Number,           // Rating given by the customer (1-5)
      review_text: String,      // Review text
      review_date: Date         // Date the review was posted
    }
  ],
  discount: {                   // Discount information (optional)
    percentage: Number,        // Percentage discount (e.g., 20 for 20% off)
    start_date: Date,          // Start date for the discount
    end_date: Date             // End date for the discount
  },
  variants: [                   // Optional: for products with variants (size, color, etc.)
    {
      variant_id: ObjectId,     // Unique ID for the variant
      name: String,             // Variant name (e.g., "Medium", "Red")
      price: Number,            // Price specific to the variant
      stock_quantity: Number,   // Stock for this variant
      images: [String]          // Images specific to this variant
    }
  ]
}

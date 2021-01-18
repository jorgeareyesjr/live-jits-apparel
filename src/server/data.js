/**
 * Live Jits Apparel Shop
 * 
 * @NOTE: Changing the shop's data shape will break the app's routing and product filtering/sorting functionality. If a refactor is required, ensure the existing routers and product filtering/sorting functionality are updated accordingly.
 * 
 * Main Shop Categories:
 * - Gis
 * - Rashguards
 * - Shorts // @TODO
 * - Sweaters // @TODO
 * - Hats (Accessory)
 * - Keychains (Accessory) // @TODO
 * - Patches (Accessory) // @TODO
 * 
 * Main Shop Collections:
 * - Mens
 * - Womens
 * - Kids
 * - Accessories
 * 
 * URL: /shop/:category/:collection/:product
 * -> /shop/gis
 * -> /shop/gis/mens-gis
 * -> /shop/gis/mens-gis/product-1
 * -> /shop/gis/mens-gis/product-2
 * 
 * -> /shop/gis
 * -> /shop/gis/womens-gis
 * -> /shop/gis/womens-gis/product-1
 * -> /shop/gis/womens-gis/product-2
 * 
 * URL: /shop/:collection/:category/:product
 * -> /shop/mens-apparel
 * -> /shop/mens-apparel/mens-gis
 * -> /shop/mens-apparel/mens-gis/product-1
 * -> /shop/mens-apparel/mens-gis/product-2
 * 
 * -> /shop/womens-apparel
 * -> /shop/womens-apparel/womens-gis
 * -> /shop/womens-apparel/womens-gis/product-1
 * -> /shop/womens-apparel/womens-gis/product-2
 * 
 **/
const Shop = [
	/* MAIN APPAREL */

	// Gis - Mens - Total: 3
	{
		product_category: 'gis',
		product_collection: 'mens-apparel',
		product_id: 1,
		product_name: 'Mens Gi Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0001',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'gis',
		product_collection: 'mens-apparel',
		product_id: 2,
		product_name: 'Mens Gi Type 2',
		product_price: '$70.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0002',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'gis',
		product_collection: 'mens-apparel',
		product_id: 3,
		product_name: 'Mens Gi Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0003',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	// Gis - Womens - Total: 3
	{
		product_category: 'gis',
		product_collection: 'womens-apparel',
		product_id: 4,
		product_name: 'Womens Gi Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0004',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'gis',
		product_collection: 'womens-apparel',
		product_id: 5,
		product_name: 'Womens Gi Type 2',
		product_price: '$70.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0005',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'gis',
		product_collection: 'womens-apparel',
		product_id: 6,
		product_name: 'Womens Gi Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0006',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	// Gis - Kids - Total: 3
	{
		product_category: 'gis',
		product_collection: 'kids-apparel',
		product_id: 7,
		product_name: 'Kids Gi Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0007',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'gis',
		product_collection: 'kids-apparel',
		product_id: 8,
		product_name: 'Kids Gi Type 2',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0008',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'gis',
		product_collection: 'kids-apparel',
		product_id: 9,
		product_name: 'Kids Gi Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0009',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	// Rashguards - Mens - Total: 3
	{
		product_category: 'rashguards',
		product_collection: 'mens-apparel',
		product_id: 10,
		product_name: 'Mens Rashguard Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0010',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'rashguards',
		product_collection: 'mens-apparel',
		product_id: 11,
		product_name: 'Mens Rashguard Type 2',
		product_price: '$70.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0011',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'rashguards',
		product_collection: 'mens-apparel',
		product_id: 12,
		product_name: 'Mens Rashguard Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0012',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	// Rashguards - Womens - Total: 3
	{
		product_category: 'rashguards',
		product_collection: 'womens-apparel',
		product_id: 13,
		product_name: 'Womens Rashguard Type 1',		
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0013',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'rashguards',
		product_collection: 'womens-apparel',
		product_id: 14,
		product_name: 'Womens Gi Type 2',
		product_price: '$70.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0014',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'rashguards',
		product_collection: 'womens-apparel',
		product_id: 15,
		product_name: 'Womens Rashguard Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0015',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	// Rashguards - Kids - Total: 3
	{
		product_category: 'rashguards',
		product_collection: 'kids-apparel',
		product_id: 16,
		product_name: 'Kids Rashguard Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0016',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'rashguards',
		product_collection: 'kids-apparel',
		product_id: 17,
		product_name: 'Kids Rashguard Type 2',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0017',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},
	{
		product_category: 'rashguards',
		product_collection: 'kids-apparel',
		product_id: 18,
		product_name: 'Kids Rashguard Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0018',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: false,
	},

	/* ACCESSORIES */

	// Hats - Mens - Total: 3
	{
		product_category: 'hats',
		product_collection: 'mens-apparel',
		product_id: 19,
		product_name: 'Mens Hat Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0019',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	{
		product_category: 'hats',
		product_collection: 'mens-apparel',
		product_id: 20,
		product_name: 'Mens Hat Type 2',
		product_price: '$70.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0020',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	{
		product_category: 'hats',
		product_collection: 'mens-apparel',
		product_id: 21,
		product_name: 'Mens Hat Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0021',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	// Hats - Womens - Total: 3
	{
		product_category: 'hats',
		product_collection: 'womens-apparel',
		product_id: 22,
		product_name: 'Womens Hat Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0021',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	{
		product_category: 'hats',
		product_collection: 'womens-apparel',
		product_id: 23,
		product_name: 'Womens Hat Type 2',
		product_price: '$70.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0023',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	{
		product_category: 'hats',
		product_collection: 'womens-apparel',
		product_id: 24,
		product_name: 'Womens Hat Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0024',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	// Hats - Kids - Total: 3
	{
		product_category: 'hats',
		product_collection: 'kids-apparel',
		product_id: 25,
		product_name: 'Kids Hat Type 1',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0025',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	{
		product_category: 'hats',
		product_collection: 'kids-apparel',
		product_id: 26,
		product_name: 'Kids Hat Type 2',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0026',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
	{
		product_category: 'hats',
		product_collection: 'kids-apparel',
		product_id: 27,
		product_name: 'Kids Hat Type 3',
		product_price: '$75.00',
		product_sizes: [
			{
				size: "XS",
				inventory: 0
			},
			{
				size: "S",
				inventory: 3
			},
			{
				size: "M",
				inventory: 5
			},
			{
				size: "L",
				inventory: 5
			},
			{
				size: "XL",
				inventory: 3
			},
			{
				size: "XXL",
				inventory: 0
			}
		],
		product_sku: 'item-0027',
		product_images: [
			"IMG-001",
			"IMG-002",
			"IMG-003",
		],
		product_is_accessory: true,
	},
];

function getAllShopAccessories(data) {
	const allAccessories = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i].product_is_accessory) {
			// Ensure that product passes a redirect URL.
			allAccessories.push({
				...data[i],
				redirect: `${data[i].product_collection}/${data[i].product_sku}`
			});
		}
	};

	return allAccessories;
};
function getAllShopCategories(data) {
	let uniqueCategories = [];

	for (let i = 0; i < data.length; i++) {
		let duplicate = uniqueCategories.find((item) => {
			return item.product_category === data[i].product_category;
		});

		if (!duplicate) {
			uniqueCategories.push({
				product_category: data[i].product_category,
				redirect: `${data[i].product_category}`
			});
		}
	};

	return uniqueCategories;
};
function getAllShopCollections(data) {
	let uniqueCollections = [];

	for (let i = 0; i < data.length; i++) {
		let duplicate = uniqueCollections.find((item) => {
			return item.product_collection === data[i].product_collection;
		});

		if (!duplicate) {
			uniqueCollections.push({
				product_collection: data[i].product_collection,
				redirect: `${data[i].product_collection}`
			});
		}
	};

	// Ensure that 'Accessories' has it's own collection entry.
	uniqueCollections.push({
		product_collection: 'accessories',
		redirect: `accessories`
	});

	return uniqueCollections;
};
function getAllShopProducts(data) {
	const allProducts = [];
	
	for (let i = 0; i < data.length; i++) {
		// Ensure that product passes a redirect URL.
		allProducts.push({
			...data[i],
			redirect: `${data[i].product_collection}/${data[i].product_sku}`
		});
	};

	return allProducts;
};

/* FILTERS */
function filterProductsByCategory(data, category) {
	const filteredProducts = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i].product_category === category) {
			filteredProducts.push(data[i])
		};
	};

	return filteredProducts;
};
function filterProductsByCollection(data, collection) {
	const filteredProducts = [];

	for (let i = 0; i < data.length; i++) {
		if (collection === 'accessories' && data[i].product_is_accessory) {
			filteredProducts.push(data[i])
		} else if (data[i].product_collection === collection) {
			filteredProducts.push(data[i])
		};
	};

	return filteredProducts;
};
function filterProductsByProductId(data, productId) {
	const product = []; 

	for (let i = 0; i < data.length; i++) {
		if (data[i].product_id === productId) {
			product.push(data[i]);
		}
	};

	return product;
};

export {
	getAllShopAccessories,
	getAllShopCategories,
	getAllShopCollections,
	getAllShopProducts,
	filterProductsByCategory,
	filterProductsByCollection,
	filterProductsByProductId,
};
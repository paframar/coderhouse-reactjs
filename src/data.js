const productsArray = [
	{
		"id": 1, 
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
		"name": "CHECK PRINT SHIRT",
		"price": 110,
		"category":"Clothes",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 2, 
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
		"name": "GLORIA HIGH LOGO SNEAKER",
		"price": 91,
		"category":"Clothes",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 3, 
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
		"name": "CATE RIGID BAG",
		"price": 94.5,
		"category":"Accesories",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 4, 
		"imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
		"name": "GUESS CONNECT WATCH",
		"price": 438.9,
		"category":"Watches",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 5, 
		"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
		"name": "70's RETRO GLAM KEFIAH",
		"price": 20,
		"category":"Accesories",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 6, 
		"imgUrl": "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		"name": "VENUS HD MAKE UP",
		"price": 24.80,
		"category":"Make up",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 7, 
		"imgUrl": "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		"name": "ROSE DROPS",
		"price": 29.80,
		"category":"Make up",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	},
	{
		"id": 8, 
		"imgUrl": "https://cdn.shopify.com/s/files/1/0438/5384/0533/files/ROCKSHELL_HEADER_736x.png?v=1616673460",
		"name": "ROAMER OF SWITZERLAND",
		"price": 229.80,
		"category":"Watches",
		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur libero laborum ea iste culpa repellendus sunt temporibus magni, repudiandae eius possimus sed, odio fugiat vel, repellat distinctio? Nihil, perspiciatis rem dicta quis optio, vero nostrum harum animi saepe nisi consectetur dolores dolore aut vitae nulla blanditiis cumque sed ab?",
		"shipping":"3 days",
		"shipping-cost":"Free",
		"stock": 5
	}
]

export default productsArray;
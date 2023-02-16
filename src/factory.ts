abstract class Product {
	public abstract use(): void
}

class ProductA extends Product {
	public use() {
		console.log("use ProductA")
	}
}

class ProductB extends Product {
	public use() {
		console.log("use ProductB")
	}
}

export class Factory {
	public static createProduct(type: "A" | "B"): Product {
		if (type === "A") {
			return new ProductA()
		} else if (type === "B") {
			return new ProductB()
		} else {
			throw new Error("Product Factory Error")
		}
	}
}

const productA = Factory.createProduct("A")
productA.use()

const productB = Factory.createProduct("B")
productB.use()

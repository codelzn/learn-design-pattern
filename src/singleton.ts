/**
 * シングルトンパターン
 * @description
 * インスタンスを一つしか生成しないようにするパターン
 */
export class Singleton {
	private static instance: Singleton
	private constructor() {}
	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton()
		}
		return Singleton.instance
	}
}

const singleton = Singleton.getInstance()
const singleton2 = Singleton.getInstance()
console.log(singleton === singleton2) // true

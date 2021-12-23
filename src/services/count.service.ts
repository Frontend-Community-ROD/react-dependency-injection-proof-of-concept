import { injectable as Injectable } from "inversify";
import container from "../di/container";

@Injectable()
export default class CountService {
	private _count: number;

	get count(): number {
		return this._count;
	}

	constructor() {
		this._count = 0;
	}

	increase(): number {
		this._count++;
		return this._count;
	}

	decrease(): number {
		this._count--;
		return this._count;
	}
}

container.bind(CountService).toSelf().inTransientScope();

import { useRef } from "react";
import { interfaces } from "inversify";
import container from "../container";

export default function useDependencies<T = any>(
	dependencies: interfaces.ServiceIdentifier[]
): T {
	const dependenciesRef = useRef(dependencies.map((x) => container.get(x)));
	return dependenciesRef.current as any;
}

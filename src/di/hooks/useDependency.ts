import { useRef } from "react";
import { interfaces } from "inversify";
import container from "../container";

export default function useDependency<T>(
	dependency: interfaces.ServiceIdentifier<T>
): T {
	const dependencyRef = useRef(container.get(dependency));
	return dependencyRef.current;
}

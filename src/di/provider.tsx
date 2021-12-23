import { Provider } from "inversify-react";
import { PropsWithChildren } from "react";
import container from "./container";

export default function IOCProvider(
	props: PropsWithChildren<{}>
): JSX.Element {
	return <Provider {...{ container }}>{props.children}</Provider>;
}

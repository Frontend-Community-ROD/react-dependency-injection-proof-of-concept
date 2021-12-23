// import useDependency from "./di/hooks/useDependency";
import { useState } from "react";
import useDependency from "./di/hooks/useDependency";
import CountService from "./services/count.service";
import styles from "./App.module.scss";

export default function App(): JSX.Element {
	const countService = useDependency(CountService);
	const [count, setCount] = useState<number>(countService.count);

	return (
		<main className={styles.main}>
			<button onClick={() => setCount(countService.decrease())}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M0 10h24v4h-24z" />
				</svg>
			</button>

			<input type="text" value={count} disabled />

			<button onClick={() => setCount(countService.increase())}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
				</svg>
			</button>
		</main>
	);
}

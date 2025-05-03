import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ArithimeticAverage = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateMean() {
		const numbers = input
			.split(",")
			.map((n) => Number.parseFloat(n.trim()))
			.filter((n) => !Number.isNaN(n));
		if (numbers.length === 0) {
			setResult(null);
			return;
		}
		const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
		setResult(mean);
	}

	return (
		<div>
			<Label htmlFor="mean-values">Valores</Label>
			<Input
				id="mean-values"
				placeholder="Ex: 2, 4, 6"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<Button className="mt-2" onClick={calculateMean}>
				Calcular
			</Button>
			{result !== null && (
				<p className="mt-2">
					Média aritmética: <b>{result}</b>
				</p>
			)}
		</div>
	);
};

export default ArithimeticAverage;

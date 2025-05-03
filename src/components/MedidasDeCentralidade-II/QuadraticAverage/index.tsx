import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const QuadraticAverage = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculate() {
		const numbers = input
			.split(",")
			.map((n) => Number.parseFloat(n.trim()))
			.filter((n) => !Number.isNaN(n));
		if (numbers.length === 0) {
			setResult(null);
			return;
		}
		const mean = Math.sqrt(
			numbers.reduce((acc, n) => acc + n * n, 0) / numbers.length,
		);
		setResult(mean);
	}

	return (
		<div>
			<Label className="block mb-1">Valores (separados por vírgula)</Label>
			<Input
				className="border rounded px-2 py-1 w-full"
				placeholder="Ex: 2, 4, 8"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<Button className="mt-2" onClick={calculate}>
				Calcular
			</Button>
			{result !== null && (
				<p className="mt-2">
					Média quadrática: <b>{result}</b>
				</p>
			)}
		</div>
	);
};

export default QuadraticAverage;

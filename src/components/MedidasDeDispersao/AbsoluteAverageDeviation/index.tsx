import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AbsoluteAverageDeviation = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculate() {
		const numbers = input
			.split(",")
			.map((n) => Number.parseFloat(n.trim()))
			.filter((n) => !Number.isNaN(n));
		if (numbers.length === 0) return setResult(null);
		const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
		const dma =
			numbers.reduce((acc, n) => acc + Math.abs(n - mean), 0) / numbers.length;
		setResult(dma);
	}

	return (
		<div>
			<Label>Valores (separados por vírgula)</Label>
			<Input
				className="border rounded px-2 py-1 w-full"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Ex: 2, 4, 8"
			/>
			<Button className="mt-2" onClick={calculate}>
				Calcular
			</Button>
			{result !== null && (
				<p className="mt-2">
					Desvio Médio Absoluto: <b>{result}</b>
				</p>
			)}
		</div>
	);
};

export default AbsoluteAverageDeviation;

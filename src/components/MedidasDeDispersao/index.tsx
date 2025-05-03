import TabsComponent from "../Tabs";
import AbsoluteAverageDeviation from "./AbsoluteAverageDeviation";
import Amplitude from "./Amplitude";
import StandardDeviation from "./StandardDeviation";
import VairationCoefficient from "./VairationCoefficient";
import Variance from "./Variance";

const MedidasDeDispersao = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">Medidas de Dispersão</h1>
			<TabsComponent
				defaultValue="amplitude"
				tabs={[
					{ value: "amplitude", label: "Amplitude" },
					{ value: "desvio-medio-absoluto", label: "Desvio Médio Absoluto" },
					{ value: "desvio-padrao", label: "Desvio Padrão" },
					{ value: "variancia", label: "Variância" },
					{
						value: "coeficiente-de-variacao",
						label: "Coeficiente de Variação",
					},
				]}
				tabsContent={[
					{
						value: "amplitude",
						content: (
							<div className="flex flex-col gap-4">
								<Amplitude />
							</div>
						),
					},
					{
						value: "desvio-medio-absoluto",
						content: (
							<div className="flex flex-col gap-4">
								<AbsoluteAverageDeviation />
							</div>
						),
					},
					{
						value: "desvio-padrao",
						content: (
							<div className="flex flex-col gap-4">
								<StandardDeviation />
							</div>
						),
					},
					{
						value: "variancia",
						content: (
							<div className="flex flex-col gap-4">
								<Variance />
							</div>
						),
					},
					{
						value: "coeficiente-de-variacao",
						content: (
							<div className="flex flex-col gap-4">
								<VairationCoefficient />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default MedidasDeDispersao;

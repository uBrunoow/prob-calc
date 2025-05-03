import TabsComponent from "../Tabs";
import ArithimeticAverage from "./ArithimeticAverage";
import WeightedAverage from "./WeightedAverage";

const MedidasDeCentralidade1 = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">Medidas de Centralidade I</h1>
			<TabsComponent
				defaultValue="media-aritimetica"
				tabs={[
					{ value: "media-aritimetica", label: "Média Aritimética" },
					{ value: "media-ponderada", label: "Média Ponderada" },
				]}
				tabsContent={[
					{
						value: "media-aritimetica",
						content: (
							<div className="flex flex-col gap-4">
								<ArithimeticAverage />
							</div>
						),
					},
					{
						value: "media-ponderada",
						content: (
							<div className="flex flex-col gap-4">
								<WeightedAverage />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default MedidasDeCentralidade1;

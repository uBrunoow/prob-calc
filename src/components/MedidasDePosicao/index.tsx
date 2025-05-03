import TabsComponent from "../Tabs";
import ScoreZ from "./ScoreZ";

const MedidasDePosicao = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">Medidas de Posição</h1>
			<TabsComponent
				defaultValue="escore-z"
				tabs={[{ value: "escore-z", label: "Escore Z" }]}
				tabsContent={[
					{
						value: "escore-z",
						content: (
							<div className="flex flex-col gap-4">
								<ScoreZ />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default MedidasDePosicao;

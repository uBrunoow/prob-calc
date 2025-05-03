import TabsComponent from "../Tabs";
import GeometricAverage from "./GeometricAverage";
import HarmonicAverage from "./HarmonicAverage";
import QuadraticAverage from "./QuadraticAverage";

const MedidasDeCentralidade2 = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">Medidas de Centralidade II</h1>
			<TabsComponent
				defaultValue="media-harmonica"
				tabs={[
					{ value: "media-harmonica", label: "Média Harmônica" },
					{ value: "media-geometrica", label: "Média Geométrica" },
					{ value: "media-quadratica", label: "Média Quadrática" },
				]}
				tabsContent={[
					{
						value: "media-harmonica",
						content: (
							<div className="flex flex-col gap-4">
								<HarmonicAverage />
							</div>
						),
					},
					{
						value: "media-geometrica",
						content: (
							<div className="flex flex-col gap-4">
								<GeometricAverage />
							</div>
						),
					},
					{
						value: "media-quadratica",
						content: (
							<div className="flex flex-col gap-4">
								<QuadraticAverage />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default MedidasDeCentralidade2;

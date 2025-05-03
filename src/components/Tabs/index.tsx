import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type React from "react";

const TabsComponent = ({
	defaultValue,
	tabs,
	tabsContent,
}: {
	defaultValue: string;
	tabs: { value: string; label: string }[];
	tabsContent: { value: string; content: React.ReactNode }[];
}) => {
	return (
		<Tabs defaultValue={defaultValue} className="w-full mt-2">
			<TabsList className="flex flex-row gap-4 mb-3 flex-wrap h-auto">
				{tabs?.map((tab) => (
					<TabsTrigger key={tab.value} value={tab.value}>
						{tab.label}
					</TabsTrigger>
				))}
			</TabsList>
			{tabsContent?.map((tabContent) => (
				<TabsContent key={tabContent.value} value={tabContent.value}>
					{tabContent.content}
				</TabsContent>
			))}
		</Tabs>
	);
};

export default TabsComponent;

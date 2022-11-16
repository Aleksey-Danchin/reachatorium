import { Container } from "@mui/material";
import { FC } from "react";
import { ActCard } from "./components/ActCard";

export const App: FC = () => {
	return (
		<Container>
			<ActCard
				act={{
					id: "0",
					title: "Чтение",
					dateAt: Date.now(),
					details: [
						{ label: "Время", type: "time", value: Date.now() },
						{
							label: "Продолжительность",
							type: "number",
							value: 60,
						},
						{
							label: "Книга",
							type: "string",
							value: "Как завоевывать друзей и оказывать влияние на людей",
						},
						{
							label: "Конспект",
							type: "string",
						},
					],
				}}
			/>
		</Container>
	);
};

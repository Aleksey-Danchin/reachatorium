import { Card, CardContent, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { ActCard } from "./components/ActCard";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { DatePicker } from "@mui/x-date-pickers";

const { format: dateFormat } = new Intl.DateTimeFormat("en-EN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
});

const act: ActDataType = {
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
};

export const App: FC = () => {
	const [title, setTitle] = useState("");
	const [dateAt, setDateAt] = useState(Date.now());

	return (
		<Container>
			<Card>
				<CardContent>
					<TextField
						fullWidth
						label="Акт"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<TextField
						fullWidth
						type="date"
						label="Акт"
						value={dateFormat(dateAt)}
						onChange={(e) =>
							setDateAt(new Date(e.target.value).getTime())
						}
					/>

					{/* <DatePicker
						label="Date desktop"
						inputFormat="MM/DD/YYYY"
						value={dateAt}
						onChange={(x) => setDateAt(x || Date.now())}
						renderInput={(params) => <TextField {...params} />}
					/> */}

					{/* <MobileDatePicker
						label="Date mobile"
						inputFormat="MM/DD/YYYY"
						value={new Date(dateAt)}
						onChange={(next) =>
							setDateAt(next?.getTime() || Date.now())
						}
						renderInput={(params) => <TextField {...params} />}
					/> */}
				</CardContent>
			</Card>

			<ActCard act={act} />
		</Container>
	);
};

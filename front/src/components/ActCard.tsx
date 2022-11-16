import {
	Box,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from "@mui/material";
import { FC, memo } from "react";
import { DetailValue } from "./DetailValue";

export type ActCardPropsType = {
	act: ActDataType;
};

const { format: datetype } = new Intl.DateTimeFormat("ru-RU", {
	year: "numeric",
	month: "long",
	day: "numeric",
});

export const ActCard: FC<ActCardPropsType> = memo(({ act }) => {
	return (
		<Card sx={{ border: "1px solid green" }}>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Typography>{act.title}</Typography>
					<Typography>{datetype(act.dateAt)}</Typography>
				</Box>
			</CardContent>

			{act.details.length && (
				<List dense>
					{act.details.map((detail, index) => (
						<ListItem disablePadding key={index}>
							<ListItemButton>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										width: "100%",
									}}
								>
									<Typography>{detail.label}</Typography>
									<DetailValue detail={detail} />
								</Box>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			)}
		</Card>
	);
});

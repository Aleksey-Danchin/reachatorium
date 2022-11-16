import { Typography } from "@mui/material";
import { FC, memo } from "react";

export type ActCardPropsType = {
	act: ActDataType;
};

const { format: datetype } = new Intl.DateTimeFormat("ru-RU", {
	year: "numeric",
	month: "long",
	day: "numeric",
});

const { format: timetype } = new Intl.DateTimeFormat("ru-RU", {
	hour: "2-digit",
	hour12: false,
	minute: "2-digit",
});
export type DetailValuePropsType = {
	detail: ActDetailDataType;
};

export const DetailValue: FC<DetailValuePropsType> = memo(({ detail }) => {
	if (!detail.type || !detail.value) {
		return null;
	}

	if (detail.type === "string" || detail.type === "number") {
		return <Typography>{detail.value}</Typography>;
	}

	if (detail.type === "date") {
		return <Typography>{datetype(new Date(detail.value))}</Typography>;
	}

	if (detail.type === "time") {
		return <Typography>{timetype(new Date(detail.value))}</Typography>;
	}

	return null;
});

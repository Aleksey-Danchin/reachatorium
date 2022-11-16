/// <reference types="react-scripts" />

type ActDataType = {
	id: string;
	title: string;
	dateAt: number;
	details: ActDetailDataType[];
};

type ActDetailDataType = {
	label: string;
} & (
	| {
			type?: "date" | "time" | "datetime" | "number";
			value?: number;
	  }
	| {
			value?: string;
			type?: "string";
	  }
	| {
			value?: boolean;
			type?: "boolean";
	  }
);

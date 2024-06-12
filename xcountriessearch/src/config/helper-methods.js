import toast from "react-hot-toast";

export const showToast = (message, type = "error", duration = 4000) => {
	toast[type](message, { duration });
};

export const errorHandler = (error) => {
	showToast(
		error?.reason?.length
			? error?.reason
			: "Something went wrong, Try again after some time."
	);
};

export const filterData = (data, searchParam)=>{
	console.log(data, searchParam)
	if(searchParam===''){
		return data;
	}
	const filteredOptions = data.filter((country) =>
			country['name']['common'].toLowerCase()?.includes(searchParam.toLowerCase())
	);
	return filteredOptions;
}
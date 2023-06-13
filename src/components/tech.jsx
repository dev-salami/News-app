import axios from "axios";
import { useState } from "react";
import Loader from "./loader";
import Item from "./item";
import { useQuery } from "@tanstack/react-query";
function Tech() {
	const [News, setNews] = useState([]);
	const options = {
		method: "GET",
		url: "https://free-news.p.rapidapi.com/v1/search",
		params: {
			q: " tech || programming || crypto || automation || Robotics || Space || coding || bitcoin || nft   ",
			lang: "en",
			page: 1,
			page_size: 24,
		},
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_PUBLIC_KEY,
			"X-RapidAPI-Host": "free-news.p.rapidapi.com",
		},
	};
	const { isLoading, isError, error, isSuccess } = useQuery({
		queryKey: ["tech"],
		queryFn: () => {
			return axios
				.request(options)
				.then((data) => {
					setNews(data.data.articles);
					return data;
				})
				.catch((err) => {
					return err;
				});
		},
	});

	return (
		<div className="min-h-screen">
			<section className="  pt-[100px]">
				{isError && (
					<div className="text text-6xl  flex justify-center text-red-600 px-20">
						{error}
					</div>
				)}

				{isLoading && <Loader />}

				{isSuccess && (
					<div className=" gap-6 p-6  flex flex-col ">
						{News.map((item) => (
							<Item
								key={item._id}
								item={item}
							/>
						))}
					</div>
				)}
			</section>
		</div>
	);
}
export default Tech;

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
function Item({ item }) {
	const [Like, setLike] = useState(false);
	// const truncateString = (str, num) => {
	// 	if (str?.length > num) {
	// 		return str.slice(0, num) + "...";
	// 	} else {
	// 		return str;
	// 	}
	// };
	return (
		<div>
			{/* <div className="w-auto min-h-[400px] rounded-lg mb-2 flex flex-col space-y-2 p-2 shadow-sm shadow-white bg-black text-white ">
				<h1 className="text-2xl font-semibold">
					{item.title}
				</h1>
				<p>{item.summary}</p>
				<a
					className="hover:border-b-red-400 hover:border-b-2 inline-block w-fit"
					href={item.link}>
					View news in full
				</a>
				<p>
					Author :<span className="pl-1 font-bold">{item.author}</span>
				</p>
				<p>
					Pulblished Time :
					<span className="pl-1 font-bold">{item.published_date}</span>
				</p>
			</div> */}
			<div className="w-full text-center  rounded-lg mb-2 flex  gap-4 items-center justify-between p-2 shadow-sm shadow-white bg-black text-white ">
				<a
					href={item.link}
					className="flex gap-1  items-center ">
					<HiChevronDoubleRight size={20} />
					{item.title}
					<HiChevronDoubleLeft size={20} />
				</a>
				<div
					className="cursor-pointer"
					onClick={() => setLike((prev) => !prev)}>
					{Like ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
				</div>
				{/* <p>{item.summary}</p> */}
				{/* <a
					className="hover:border-b-red-400 hover:border-b-2 inline-block w-fit"
					href={item.link}>
					View news in full
				</a> */}
				{/* <p>
					Author :<span className="pl-1 font-bold">{item.author}</span>
				</p> */}
				{/* <p>
					<span className="pl-1 font-bold">{item.published_date}</span>
				</p> */}
			</div>
		</div>
	);
}
export default Item;

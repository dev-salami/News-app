function item({ item }) {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div>
      <div className="w-auto min-h-[400px] rounded-lg mb-2 flex flex-col space-y-2 p-2 shadow-sm shadow-white bg-black text-white ">
        <h1 className="text-2xl font-semibold">
          {/* Bitcoin: Moving beyond Bitcoin to the next crypto revolution in 2021 */}
          {item.title}
        </h1>
        <p>{truncateString(item.summary, 350)}</p>
        <a
          className="hover:border-b-red-400 hover:border-b-2 inline-block w-fit"
          href={item.link}
        >
          View news in full
        </a>
        <p>
          Author :<span className="pl-1 font-bold">{item.author}</span>
        </p>
        <p>
          Pulblished Time :
          <span className="pl-1 font-bold">{item.published_date}</span>
        </p>
      </div>
    </div>
  );
}
export default item;

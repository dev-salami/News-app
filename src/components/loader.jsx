import { Audio } from "react-loader-spinner";
function loader() {
  return (
    <div className="h-[78vh] flex justify-center items-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#00BFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      {/* <img
        className="w-60 h-96 container mx-auto"
        src="https://th.bing.com/th/id/OIP.kIBgcyGrmPo-cN0kslE6IAHaFj?pid=ImgDet&rs=1"
        alt=""
      /> */}
      {/* <div className="text-6xl text-green-500-600">LOADING</div> */}
    </div>
  );
}
export default loader;

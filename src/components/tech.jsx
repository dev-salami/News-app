import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./loader";

import Item from "./item";
function Tech() {
  const [News, setNews] = useState([]);
  const [One, setOne] = useState(true);
  const [Two, setTwo] = useState(false);

  const [Three, setThree] = useState(false);

  const [Four, setFour] = useState(false);

  const [Five, setFive] = useState(false);
  const [Loading, setLoading] = useState(true);

  const [Error, setError] = useState("");
  const [AError, setAError] = useState("");

  const Fetchone = (e) => {
    setLoading(true);

    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: {
        q: " tech || programming || crypto || automation || Robotics || Space ",
        lang: "en",
        page: "1",
        page_size: 24,
      },
      headers: {
        "X-RapidAPI-Key": "9afcd5f4f4msh06893889a8220e8p159a8ajsn9b8bfac23ce4",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
        setLoading(false);

        console.log(News);
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError("NETWORK ERROR");
      });
  };
  useEffect(() => {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: {
        q: " tech || programming || crypto || automation || Robotics || Space ",
        lang: "en",
        page: "1",
        page_size: 24,
      },
      headers: {
        "X-RapidAPI-Key": "9afcd5f4f4msh06893889a8220e8p159a8ajsn9b8bfac23ce4",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
        setError("");
        setLoading(false);

        console.log(News);
      })
      .catch(function (error) {
        console.log(News.length);

        if (
          error.message === "Request failed with status code 429" &&
          News.length === 0
        ) {
          setAError("API ERROR");
          setLoading(false);
          console.log(News.length);
        }
        console.log(error);
        setTimeout(() => {
          if (error.message === "Network Error" && News.length === 0) {
            setError(error.message);
            setLoading(true);
          }
        }, 5000);
      });
  }, []);
  const Fetchtwo = (e) => {
    setLoading(true);

    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
    setFive(false);
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: {
        q: " tech || programming || crypto || automation || Robotics || Space ",
        lang: "en",
        page: "2",
        page_size: 24,
      },
      headers: {
        "X-RapidAPI-Key": "9afcd5f4f4msh06893889a8220e8p159a8ajsn9b8bfac23ce4",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
        setLoading(false);

        console.log(News);
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError("NETWORK ERROR");
      });
  };
  const Fetchtre = (e) => {
    setLoading(true);

    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
    setFive(false);
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: {
        q: " tech || programming || crypto || automation || Robotics || Space",
        lang: "en",
        page: "3",
        page_size: 24,
      },
      headers: {
        "X-RapidAPI-Key": "9afcd5f4f4msh06893889a8220e8p159a8ajsn9b8bfac23ce4",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
        setLoading(false);

        console.log(News);
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError("NETWORK ERROR");
      });
  };
  const Fetchfor = (e) => {
    setLoading(true);

    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
    setFive(false);
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: {
        q: " tech || programming || crypto || automation || Robotics || Space ",
        lang: "en",
        page: "4",
        page_size: 24,
      },
      headers: {
        "X-RapidAPI-Key": "9afcd5f4f4msh06893889a8220e8p159a8ajsn9b8bfac23ce4",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
        setLoading(false);

        console.log(News);
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError("NETWORK ERROR");
      });
  };

  const Fetchfive = (e) => {
    setLoading(true);

    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(true);
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: {
        q: " tech || programming || crypto || automation || Robotics || Space",
        lang: "en",
        page: "5",
        page_size: 24,
      },
      headers: {
        "X-RapidAPI-Key": "9afcd5f4f4msh06893889a8220e8p159a8ajsn9b8bfac23ce4",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
        setLoading(false);

        console.log(News);
        setError("");
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError("NETWORK ERROR");
      });
  };

  return (
    <div className="min-h-screen">
      <section className="  pt-[100px]">
        {!Loading && (
          <div className="text text-6xl  flex justify-center text-red-600 px-20">
            {Error}
          </div>
        )}
        {!News && (
          <div className="text text-6xl  flex justify-center text-red-600 px-20">
            {AError}
          </div>
        )}
        {Loading && <Loader />}
        {!Loading && (
          <div className=" gap-6 pt-7 pb-10 px-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {News.map((item, id) => (
              <Item key={id} item={item} />
            ))}
          </div>
        )}
      </section>
      <section className="bg-red-200 py-2 relative left-0 right-0 bottom-0">
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex space-x-3 list-style-none">
              <li className="page-item" onClick={Fetchone}>
                <a
                  className={
                    One
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white   shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800  hover:bg-gray-200 focus:shadow-none"
                  }
                  href="/"
                >
                  1
                </a>
              </li>
              <li className="page-item active" onClick={Fetchtwo}>
                <a
                  className={
                    Two
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white  hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800  hover:bg-gray-200 focus:shadow-none"
                  }
                  href="/"
                >
                  2
                </a>
              </li>
              <li className="page-item" onClick={Fetchtre}>
                <a
                  className={
                    Three
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white  hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800  hover:bg-gray-200 focus:shadow-none"
                  }
                  href="/"
                >
                  3
                </a>
              </li>
              <li className="page-item" onClick={Fetchfor}>
                <a
                  className={
                    Four
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white  hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800  hover:bg-gray-200 focus:shadow-none"
                  }
                  href="/"
                >
                  4
                </a>
              </li>
              <li className="page-item" onClick={Fetchfive}>
                <a
                  className={
                    Five
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white  hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800  hover:bg-gray-200 focus:shadow-none"
                  }
                  href="/"
                >
                  5
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
export default Tech;

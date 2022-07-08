import axios from "axios";
import { useState } from "react";
import Item from "./item";
function World() {
  const [News, setNews] = useState([]);
  const [One, setOne] = useState(true);
  const [Two, setTwo] = useState(false);

  const [Three, setThree] = useState(false);

  const [Four, setFour] = useState(false);

  const [Five, setFive] = useState(false);

  const Fetchone = (e) => {
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
        q: "  world || africa || asia || nigeria ||war || Earth || history  ",
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

        console.log(News);
      })
      .catch(function (error) {
        //   console.error(error);
      });
  };
  const Fetchtwo = (e) => {
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
        q: "  world || africa || asia || nigeria ||war || Earth || history  ",
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

        console.log(News);
      })
      .catch(function (error) {
        //   console.error(error);
      });
  };
  const Fetchtre = (e) => {
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
        q: "  world || africa || asia || nigeria ||war || Earth || history  ",
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

        console.log(News);
      })
      .catch(function (error) {
        //   console.error(error);
      });
  };
  const Fetchfor = (e) => {
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
        q: "  world || africa || asia || nigeria ||war || Earth || history  ",
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

        console.log(News);
      })
      .catch(function (error) {
        //   console.error(error);
      });
  };

  const Fetchfive = (e) => {
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
        q: "  world || africa || asia || nigeria ||war || Earth || history  ",
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

        console.log(News);
      })
      .catch(function (error) {
        //   console.error(error);
      });
  };
  const options = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: {
      q: " world || africa || asia || nigeria ||war || Earth || history ",
      lang: "en",
      page_size: "24",
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

      console.log(News);
    })
    .catch(function (error) {
      //   console.error(error);
    });

  return (
    <div>
      <section className="container mx-auto">
        <div className=" gap-6 p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {News.map((item, id) => (
            <Item key={id} item={item} />
          ))}
        </div>
      </section>
      <section className="bg-red-200 py-20">
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex space-x-3 list-style-none">
              <li className="page-item" onClick={Fetchone}>
                <a
                  className={
                    One
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
                      ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                      : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
export default World;

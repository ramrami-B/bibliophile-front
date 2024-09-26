import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FoxHouse from "./FoxHouse";
import BookCardReadingItem from "@/components/bookCard/BookCardReadingItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StreakCalendar from "./StreakCalendar";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import WordCloud from "./WordCloud";

const settings = (setCurrentSlide: (slideIndex: number) => void) => ({
  centerMode: true,
  centerPadding: "50px",
  slidesToShow: 1,
  infinite: true,
  speed: 500,
  arrows: true,
  beforeChange: (current: number, next: number) => setCurrentSlide(next),
});

const readingBooks = [
  {
    myBookId: 1,
    title: "책 먹는 여우",
    authors: "프란치스카 비어만",
    publisher: "주니어 김영사",
    thumbnail: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788934935018.jpg",
    createdDate: "2024-02-18",
    readingPage: 120,
    totalPage: 220,
    readingPercent: 54,
  },
  {
    myBookId: 2,
    title: "책 먹2는22 여우",
    authors: "프란치스카 비어만",
    publisher: "주니어 김영사",
    thumbnail: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788934935018.jpg",
    createdDate: "2024-02-18",
    readingPage: 120,
    totalPage: 220,
    readingPercent: 54,
  },
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mybook/reading");
  };

  return (
    <div className="h-screen overflow-y-auto pb-[65px] mt-4 m-[-5.5%]">
      <div className="m-[5.5%]">
        <FoxHouse foxId={1} level={2} foxType="BABY" foxStatus="GOOD" feedCount={8} exp={70} />

        <div className="my-[50px]">
          <div className="flex items-center justify-between my-2">
            <p className="text-black text-xl font-medium font-semibold">읽고 있는 책</p>
            <p onClick={handleClick} className="text-black text-sm font-light">
              더보기
            </p>
          </div>
          <Slider {...settings(setCurrentSlide)}>
            {readingBooks.map((book, idx) => (
              <div key={idx}>
                <div className="mx-4">
                  <BookCardReadingItem
                    myBookId={book.myBookId}
                    thumbnail={book.thumbnail}
                    title={book.title}
                    authors={book.authors}
                    publisher={book.publisher}
                    createdDate={book.createdDate}
                    readingPage={book.readingPage}
                    totalPage={book.totalPage}
                    readingPercent={book.readingPercent}
                    isActive={idx === currentSlide}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="my-[50px] ">
          <p className="text-black text-xl font-medium font-semibold">독서 캘린더</p>
          <div className="flex justify-center">
            <StreakCalendar />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-green rounded-t-lg w-[100%]">
        <p className="text-black text-xl font-medium font-semibold self-start m-5">통계</p>
        <div className="w-5/6 h-[240px] shadow-custom bg-white rounded-lg p-3 mb-5">
          <p className="text-black text-lg font-normal mb-2">분야별통계</p>
          <div className="flex justify-center items-center w-5/6 h-4/5 mx-auto my-auto">
            <PieChart />
          </div>
        </div>
        <div className="w-5/6 h-[240px] shadow-custom bg-white rounded-lg p-3">
          <p className="text-black text-lg font-normal">워드 클라우드</p>
          <div className="flex justify-center items-center w-5/6 h-4/5 mx-auto">
            <WordCloud />
          </div>
        </div>

        <div className="w-5/6 h-[240px] shadow-custom bg-white rounded-lg p-3 my-5">
          <p className="text-black text-lg font-normal">월간 독서 시간</p>
          <div className="flex justify-center">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

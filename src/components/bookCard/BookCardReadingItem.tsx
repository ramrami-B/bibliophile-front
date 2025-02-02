import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@/components/common/ProgressBar.tsx";
import { formatDate } from "@/utils/calDate.ts";

interface BookCardReadingProps {
  myBookId: number;
  thumbnail: string;
  title: string;
  authors: string;
  publisher: string;
  createdDate: string;
  readingPage: number;
  totalPage: number;
  readingPercent: number;
  isActive: boolean;
}

const activeClass = "bg-light-yellow";

const BookCardReadingItem: React.FC<BookCardReadingProps> = ({
  myBookId,
  thumbnail,
  title,
  authors,
  publisher,
  createdDate,
  readingPage,
  totalPage,
  readingPercent,
  isActive,
}) => {
  const navigate = useNavigate();

  const handleClickNavigateMoreInfo = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    navigate(`/reading/${myBookId}`);
  };

  return (
    <div
      className={`border-common h-[140px] w-full flex p-4 gap-8 shadow-custom active:shadow-custom-inner ${isActive && activeClass}`}
      onClick={handleClickNavigateMoreInfo}
    >
      <img src={thumbnail} alt={title} className="w-fit h-full object-contain" />
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex items-start justify-between">
          <div className="w-4/5">
            <p className="font-medium text-base line-clamp-1">{title}</p>
            <p className="font-medium text-[10px] line-clamp-1">{authors}</p>
            <p className="font-light text-[10px] line-clamp-1">{publisher}</p>
          </div>
          <p
            className="font-ligt text-medium-gray text-[10px] z-10 relative active:text-black w-1/5 text-right"
            onClick={handleClickNavigateMoreInfo}
          >
            더보기
          </p>
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p className="text-[10px]">{formatDate(createdDate)} ~</p>
            <p className="font-light text-[10px]">
              {readingPage} / {totalPage} p &nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <ProgressBar isThin={true} percent={readingPercent} />
        </div>
      </div>
    </div>
  );
};

export default BookCardReadingItem;

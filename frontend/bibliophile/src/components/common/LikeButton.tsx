import React, { useState } from "react";

interface LikeButtonProps {
  isBookmarked?: boolean;
  bookId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isBookmarked = false, bookId }) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleToggleBookmarked = () => {
    const updateBookmarkedState = !bookmarked;
    // TODO: API 연결 시에 bookmarked 의 T/F 여부에 따라 다르게 API 연결하기
    setBookmarked(updateBookmarkedState);
  };

  return (
    <button onClick={handleToggleBookmarked} className="z-10">
      {bookmarked ? (
        <i className="fi fi-sr-heart text-orange " />
      ) : (
        <i className="fi fi-sr-heart text-soft-gray" />
      )}
    </button>
  );
};

export default LikeButton;

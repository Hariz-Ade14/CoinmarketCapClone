import previous from "../../../public/assets/previous.png";
import next from "../../../public/assets/next.png";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  style?: string;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  style,
  onPageChange,
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-[10px] rounded-[8px] py-1 text-[13px] border ${
            currentPage === i
              ? "bg-[#4640DE] text-white"
              : "bg-[#E8EDF4] text-[#0A3059]"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={`${style} flex items-center justify-center space-x-2`}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-[7px] bg-[#E8EDF4] text-white rounded-[8px] disabled:opacity-50"
      >
        <img
          className="w-4"
          src={previous}
          alt="previous"
        />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-[7px] bg-[#E8EDF4] text-white rounded-[8px] disabled:opacity-50"
      >
        <img className="w-4" src={next} alt="next" width={20} height={20} />
      </button>
    </div>
  );
};

export default Pagination;

import { useState } from "react";

import { PrimaryButton } from "../Button/Button";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-transparent my-10 md:bg-[#FFFFFF] w-full md:w-fit flex items-center justify-center gap-4 sm:gap-6 mt-10 mx-auto py-3 px-0 md:px-6 rounded-xl shadow-none md:shadow-custom-shadow">
      <h6 className="text-[#000000] text-sm sm:text-base font-medium">
        Page {currentPage} of {totalPages}
      </h6>
      <div className="flex items-center gap-1">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <PrimaryButton
              key={page}
              type="button"
              text={String(page)}
              customStyles={`${
                isActive ? "!bg-primary !text-white" : "text-[#8992A1]"
              } text-base font-medium w-[24px] h-[24px] !bg-white flex !text-black items-center justify-center p-2 rounded-[6px] border-none outline-none`}
              onClick={() => {
                handlePageClick(page);
              }}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <h6 className="hidden md:block text-[#8992A1] text-base font-medium">
          Go to page
        </h6>
      
      </div>
    </div>
  );
};

export { Pagination };

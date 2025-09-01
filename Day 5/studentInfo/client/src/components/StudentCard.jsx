import React from "react";

const StudentCard = ({ name, grade, isGraduated, address, email }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      
      {/* Avatar / Profile Circle */}
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-xl font-semibold">
        {name?.charAt(0)}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3 text-gray-700 w-full">
        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
          Student Details
        </h2>
        <p>
          <span className="font-medium text-gray-900">Name:</span> {name}
        </p>
        <p>
          <span className="font-medium text-gray-900">Grade:</span> {grade}
        </p>
        <p>
          <span className="font-medium text-gray-900">Graduated:</span>{" "}
          <span
            className={`${
              isGraduated
                ? "text-green-600 font-medium"
                : "text-red-600 font-medium"
            }`}
          >
            {isGraduated ? "Yes" : "No"}
          </span>
        </p>
        <p>
          <span className="font-medium text-gray-900">Address:</span> {address}
        </p>
        <p>
          <span className="font-medium text-gray-900">Email:</span>{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:text-blue-500 underline"
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentCard;

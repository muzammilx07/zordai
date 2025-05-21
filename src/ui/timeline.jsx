import React from "react";

export function Timeline({ data }) {
  return (
    <div className="relative border-l border-gray-300 dark:border-neutral-700 ml-4">
      {data.map((item, index) => (
        <div key={index} className="relative mb-16 ml-6">
          {/* Circle marker */}
          <div className="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-neutral-900 shadow-md"></div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {item.title}
          </h3>

          {/* Content */}
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

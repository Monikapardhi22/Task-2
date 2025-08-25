import React from "react";

export default function Read() {
  return (
 
    // <div className="fixed inset-0  bg-opacity-[0.7] flex items-center justify-center z-50  ">
      
   
      <div className="w-[800px] h-[380px] bg-white shadow-lg p-10 relative lg:ml-[340px] m-32">
        
        <h2 className="text-[28px] font-semibold mb-4">
          HR Platform Company (Simple) - Website Template
        </h2>

        <div className="mt-4">
          <span className="font-bold text-[18px]">Good For :</span>
          <p className="text-[15px] mt-2 text-gray-700">
            HR Services, Recruitment Agencies, Employee Management, Professional Services.
          </p>
        </div>

        <div className="mt-4">
          <span className="font-bold text-[18px]">Description:</span>
          <p className="text-[15px] mt-2 text-gray-700">
            Craft a straightforward online presence that reflects your professionalism and
            commitment to HR excellence. This simple template allows you to create an
            easily navigable site, perfect for showcasing your services and attracting
            new clients. With its clean design, you can effortlessly convey the values
            and offerings of your HR platform. Ready to start building your site? Click
            'Edit' to get started.
          </p>
        </div>

        {/* 🔹 Button */}
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mt-6 rounded-2xl">
            Edit Now
          </button>
        </div>
      </div>
    // </div>
  );
}

import React, { useState } from "react";
import api from "../api/axiosInstance";

const TestApi = () => {
  const [response, setResponse] = useState(null);

  const handleApiRequest = async () => {
    try {
      const result = await api.post("/test-endpoint", { param: "value" });
      setResponse(result.data);
    } catch (error) {
      setResponse("Error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={handleApiRequest}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Make API Request
      </button>
      {response && <pre className="mt-4 p-2 bg-gray-200">{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default TestApi;

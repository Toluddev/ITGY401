// import { useState, useCallback } from "react";

// export const useToast = () => {
//   const [toasts, setToasts] = useState([]);

//   const addToast = useCallback((message, type = "info") => {
//     const id = Date.now();
//     setToasts((current) => [...current, { id, message, type }]);
//     setTimeout(() => {
//       setToasts((current) => current.filter((toast) => toast.id !== id));
//     }, 3000);
//   }, []);

//   const ToastContainer = () => (
//     <div className="fixed top-4 right-4 space-y-2 z-50">
//       {toasts.map(({ id, message, type }) => (
//         <div
//           key={id}
//           className={`px-4 py-2 rounded-md shadow-md text-white ${
//             type === "info" ? "bg-blue-500" : "bg-red-500"
//           }`}
//         >
//           {message}
//         </div>
//       ))}
//     </div>
//   );

//   return { addToast, ToastContainer };
// };

"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-borange-300 px-8 py-4 text-bistre-500 font-semibold hover:bg-borange-400 transition-all disabled:cursor-not-allowed disabled:bg-bistre-400 disabled:text-bistre-800 rounded-[20px]"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;

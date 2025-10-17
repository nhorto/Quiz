'use client';

import { useEffect } from 'react';

export default function WorkCover({ visible, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-slate-100">
      <div className="flex justify-end px-5 py-3">
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-slate-500 underline-offset-2 hover:text-slate-200 hover:underline"
        >
          Return
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-slate-200 shadow-lg shadow-slate-900/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder=""
              className="w-full bg-transparent text-base text-slate-200 focus:outline-none"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}

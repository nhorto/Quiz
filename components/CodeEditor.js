'use client';

export default function CodeEditor({ value, onChange, readOnly = false }) {
  return (
    <div className="relative">
      <div className="absolute right-2 top-2 rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">
        JavaScript
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-gray-900 p-4 font-mono text-sm text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          tabSize: 2,
          lineHeight: '1.5'
        }}
        spellCheck={false}
      />
    </div>
  );
}

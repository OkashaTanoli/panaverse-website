'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <h2 className="text-lg">Something went wrong!</h2>
    </div>
  );
}

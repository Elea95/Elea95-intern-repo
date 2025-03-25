import Counter from "../../../components/Counter";

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Counter Page</h1>

      {/* ✅ Using Counter component */}
      <Counter />
    </div>
  );
}
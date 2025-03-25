import Form from "../../../components/Form";

export default function FormPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Form Page</h1>

      {/* Use the Form component */}
      <Form />
    </div>
  );
}

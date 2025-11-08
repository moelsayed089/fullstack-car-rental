"use client";

import { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function AddCarForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/upload-car", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to upload car");
      }

      const data = await res.json();
      alert(data.message || "Car added successfully");
      e.currentTarget.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error occurred";
      alert(`❌ Error: ${message}`);
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto text-black bg-gray-200 p-6 rounded-md shadow"
    >
      <h2 className="text-xl font-semibold mb-2 text-center">Add New Car</h2>

      <InputText
        name="name"
        placeholder="Name"
        required
        className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
      />
      <InputText
        name="type"
        placeholder="Type"
        required
        className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-0 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
      />
      <input
        name="price"
        placeholder="Price"
        required
        className="border p-2 rounded"
      />
      <input
        name="fuel"
        placeholder="Fuel"
        required
        className="border p-2 rounded"
      />
      <input
        name="capacity"
        placeholder="Capacity"
        required
        className="border p-2 rounded"
      />
      <input
        name="gearbox"
        placeholder="Gearbox"
        required
        className="border p-2 rounded"
      />

      <input
        type="file"
        name="images"
        multiple
        accept="image/*"
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Uploading..." : "Add Car"}
      </button>
    </form>
  );
}

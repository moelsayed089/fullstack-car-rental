"use client";
import { useState } from "react";
import PickAndDropLable from "./PickAndDropLable";
import LocationPickerAndDrop from "./LocationPickerAndDrop";
import DatePickerAndDrop from "./DatePickerAndDrop";
import TimePickerAndDrop from "./TimePickerAndDrop";
import Icon from "../Icon";

const locations = [
  { label: "Cairo", value: "1" },
  { label: "Benha", value: "2" },
  { label: "Alex", value: "3" },
];
const dates = [
  {
    label: "10-11-2025",
    value: "10-11-2025",
  },
  {
    label: "11-11-2025",
    value: "11-11-2025",
  },
  {
    label: "12-11-2025",
    value: "12-11-2025",
  },
];
const times = [
  { label: "08:00 AM", value: "08:00 AM" },
  { label: "09:00 AM", value: "09:00 AM" },
];

// Types
type SectionType = "pickup" | "dropoff";
type FieldType = "location" | "date" | "time";

interface SectionData {
  location: string;
  date: string;
  time: string;
}

interface FormData {
  pickup: SectionData;
  dropoff: SectionData;
}

function PickAndDropWrapper() {
  const [formData, setFormData] = useState<FormData>({
    pickup: { location: "", date: "", time: "" },
    dropoff: { location: "", date: "", time: "" },
  });

  const handleChange = (
    section: SectionType,
    field: FieldType,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
      {/* Pickup */}
      <div className="w-full md:w-[50%] py-4 px-6 bg-white  rounded-md">
        <PickAndDropLable title="Pick-Up" />
        <div className="grid grid-cols-3 gap-2  ">
          <LocationPickerAndDrop
            label="Locations"
            value={formData.pickup.location}
            onChange={(val: string) => handleChange("pickup", "location", val)}
            options={locations}
            placeholder="Select the city"
          />
          <DatePickerAndDrop
            label="Date"
            value={formData.pickup.date}
            onChange={(val: string) => handleChange("pickup", "date", val)}
            options={dates}
            placeholder="Select the date"
          />
          <TimePickerAndDrop
            label="Time"
            value={formData.pickup.time}
            onChange={(val: string) => handleChange("pickup", "time", val)}
            options={times}
            placeholder="Select the time"
          />
        </div>
      </div>

      {/* Icon */}
      <div className="w-fit h-fit  p-4 bg-blue-600 rounded-lg shadow-md">
        <Icon name="swap" />
      </div>

      {/* Drop-off */}
      <div className="w-full md:w-[50%] py-4 px-6 bg-white  rounded-md">
        <PickAndDropLable title="Drop-Off" />
        <div className="grid grid-cols-3">
          <LocationPickerAndDrop
            label="Locations"
            value={formData.dropoff.location}
            onChange={(val: string) => handleChange("dropoff", "location", val)}
            options={locations}
            placeholder="Select the city"
          />
          <DatePickerAndDrop
            label="Date"
            value={formData.dropoff.date}
            onChange={(val: string) => handleChange("dropoff", "date", val)}
            options={dates}
            placeholder="Select the date"
          />
          <TimePickerAndDrop
            label="Time"
            value={formData.dropoff.time}
            onChange={(val: string) => handleChange("dropoff", "time", val)}
            options={times}
            placeholder="Select the time"
          />
        </div>
      </div>
    </div>
  );
}

export default PickAndDropWrapper;

import { Rating, RatingChangeEvent } from "primereact/rating";

interface IRatingWrapperProps {
  value: number;
  onChange: (value: number) => void;
}
export default function RatingWrapper({
  value,
  onChange,
}: IRatingWrapperProps) {
  const handleChange = (e: RatingChangeEvent) => {
    onChange(e.value ?? 0);
  };

  return (
    <div className="card flex justify-content-center">
      <Rating value={value} onChange={handleChange} cancel={false} />
    </div>
  );
}

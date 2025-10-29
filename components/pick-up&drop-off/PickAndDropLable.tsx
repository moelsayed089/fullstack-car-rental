const PickAndDropLable = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-5 h-5 bg-blue-500 border-4 border-blue-300 rounded-full"></div>
      <h3 className="text-base font-semibold text-black">{title}</h3>
    </div>
  );
};

export default PickAndDropLable;

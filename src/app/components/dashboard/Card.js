export default function Card({ title, value, bgColor, icon }) {
  return (
    <div className={`${bgColor} p-5 rounded-lg w-full`}>
      <div className="float-right mb-5 clear-both text-2xl font-bold">
        {icon()}
      </div>
      <div className="mt-3">
        <h6 className="text-sm py-2">{title}</h6>
        <h2 className="text-2xl font-bold mb-2">{value}</h2>
      </div>
    </div>
  );
}

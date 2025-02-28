interface DataCardProps {
    data:string;
    value:string
}
function DataCard({ data, value }:DataCardProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-[5px] px-[30px] w-[255px] h-[128px] border border-[#FFFFFF] text-[#fff]">
      <h1 className="text-[#838391] uppercase tracking-[1px]">{data}</h1>
      <p className="text-[40px]">{value}</p>
    </div>
  );
}

export default DataCard;

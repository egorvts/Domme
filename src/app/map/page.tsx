import Map from "@/components/Map";

const MapView = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-16 bg-[#E5E3DF]/60 backdrop-blur-lg"></div>
      <div>
        <Map />
      </div>
    </>
  );
};
export default MapView;

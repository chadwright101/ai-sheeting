import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
  cssClasses?: string;
}

const ContactMap = ({ cssClasses }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded)
    return (
      <div className="mt-10 bg-white text-[30px] text-center py-16 max-w-[1400px]"></div>
    );
  return (
    <GoogleMap
      zoom={13}
      center={{ lat: -26.1518844, lng: 28.0893148 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <Marker position={{ lat: -26.1518844, lng: 28.0893148 }} />
    </GoogleMap>
  );
};

export default ContactMap;

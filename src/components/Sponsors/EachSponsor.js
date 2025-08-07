import Image from "next/image";

const EachSponsor = ({ sponsor, id, setSponsorIndex, setPopupOpen }) => {
  if (!sponsor) return <></>;
  const setIndex = () => {
    setSponsorIndex(id);
    setPopupOpen(true);
  };
  return (
    <a
      className="group aspect-square w-[100px] cursor-pointer"
      href={sponsor.website}
    >
      <Image
        src={sponsor.image || null}
        alt={sponsor.alt}
        className=" image-select-none aspect-square h-full w-full overflow-hidden rounded-full border-[1px] border-white bg-white object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
        height={200}
        width={200}
      />
    </a>
  );
};

export default EachSponsor;

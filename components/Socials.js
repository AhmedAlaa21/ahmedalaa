// links
import Link from "next/link";

//data
import { SocialData } from "../data";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      {SocialData.map((el) => (
        <Link
          className="hover:text-accent transition-all duration-300"
          key={el.id}
          href={el.path}
          target="_blank"
        >
          {el.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

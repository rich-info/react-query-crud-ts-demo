import { Link } from "react-router-dom";

interface TileProps {
  icon: JSX.Element;
  title: string;
  href: string;
}

const LinkedCard = (props: TileProps) => {
  return (
    <Link to={props.href}>
      <div className="max-w-sm m-6 p-6 border border-gray-200 rounded-lg shadow">
        <div className="flex justify-center items-center">{props.icon}</div>
        <h5 className="mb-2 text-2xl font-bold">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-white">
          Edit {props.title}
        </p>
      </div>
    </Link>
  );
};

export default LinkedCard;

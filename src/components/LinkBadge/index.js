import { Icon } from "../";

const LinkBadge = ({ href, src, alt, name, isIcon, ...props }) => {
  const imgIcon = isIcon ? (
    <Icon name={alt} size={15} />
  ) : (
    <img src={src} alt={alt} className="imgIcon" />
  );
  return (
    <a href={href}>
      <div className="badgeDiv" {...props}>
        {imgIcon}
        <span>{name}</span>
      </div>
    </a>
  );
};

export default LinkBadge;

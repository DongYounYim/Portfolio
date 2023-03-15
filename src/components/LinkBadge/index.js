import { Icon } from "../";

const LinkBadge = ({
  href,
  src,
  alt,
  name,
  size = 15,
  isIcon,
  download,
  ...props
}) => {
  const imgIcon = isIcon ? (
    <Icon name={alt} size={size} />
  ) : (
    <img
      src={src}
      alt={alt}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
  return (
    <a href={href} download={download}>
      <div className="badgeDiv" {...props}>
        {imgIcon}
        <span>{name}</span>
      </div>
    </a>
  );
};

export default LinkBadge;

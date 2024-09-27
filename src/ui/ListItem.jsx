function ListItem({ src }) {
  return (
    <li className="px-1 lg:px-2 py-1 lg:py-6">
      <img className="h-[4rem] lg:h-[5rem]" src={src} alt="support" />
    </li>
  );
}

export default ListItem;

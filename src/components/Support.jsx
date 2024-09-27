import ListItem from "./../ui/ListItem";

function Support() {
  return (
    <div className="my-10 px-3 md:px-12">
      <h2 className="font-semibold text-3xl text-center px-8">Our Support</h2>
      <ul className="flex flex-row  my-7 flex-wrap justify-center items-center gap-3 py-6 mx-auto max-w-[40rem]">
        <ListItem src="/support/vit.svg" />
        <ListItem src="/support/dlabs.svg" />
        <ListItem src="/support/ciba.svg" />
        <ListItem src="/support/thub.svg" />
        <ListItem src="/support/six.svg" />
        
      </ul>
    </div>
  );
}

export default Support;

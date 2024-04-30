export default function page() {
  return (
    <div className="flex flex-col md:flex-row gap-8 my-8 h-[480px] items-center">
      <iframe
        className="grow"
        width="100%"
        height="100%"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5-8%20Hammersley%20House,%20Warwick%20St,%20W1B%205LU,%20London,%20England+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">Infrastructure</h2>
        <p className="text-neutral-500 w-96">
          The residential complex is located in one of the best districts of the
          city: 2 minutes from it is a central park, in the yard there is a
          school and a kindergarten
        </p>
      </div>
    </div>
  );
}

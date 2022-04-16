const GuestMessage = () => {
  return (
    <div>
      <h1 id="header" className="h1 text-center">
        Welcome to <span className="h1 brand-style">WerdNerd</span>, fellow
        nerd!
      </h1>{" "}
      <div className="text-center">
        <p className="mb-2">
          <span className="brand-style">WerdNerd</span> uses
          Merriam-Webster&apos;s Collegiate® Thesaurus to create an educational
          game that puts your word-matching skills to the test!
        </p>
        <p className="mb-2">
          Don&apos;t take our &quot;werd&quot; for it - Try it yourself with one
          of our original lists below, or sign-up/log-in to create custom ones.
          It&apos;s free, easy to play, and you just might learn something!
        </p>
      </div>
    </div>
  );
};
export default GuestMessage;

const Instructions = () => {
  return (
    <div>
      <h5 className="h5">How to play:</h5>
      <ol>
        <li>
          Select a list to use for your game from the drop-down selection below.
        </li>
        <li>Press the &quot;Play&quot; button to load the game.</li>
        <li>
          Press &quot;Start&quot; to reveal the randomly-selected synonyms and
          start the clock!{" "}
        </li>
        <li>
          Match each word to their synonym by selecting the word on the left and
          their synonym on the right. A correct match will be revealed with an
          orange line connecting them together!
        </li>
        <li>
          Once you&apos;ve found all the matches, the timer stops and saves your
          time if you beat the record.
        </li>
      </ol>
    </div>
  );
};
export default Instructions;

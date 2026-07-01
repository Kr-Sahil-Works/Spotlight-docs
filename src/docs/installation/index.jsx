import Requirements from "./Requirements";
import Setup from "./Setup";
import Running from "./Running";
import Build from "./Build";

export default function Installation() {
  return (
    <>
      <Requirements />

      <Setup />

      <Running />

      <Build />
    </>
  );
}
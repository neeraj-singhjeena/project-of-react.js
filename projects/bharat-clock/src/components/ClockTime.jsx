function ClockTime() {
  let time = new Date();
  return (
    <div className="fst-normal">
      this is the current time:{time.toLocaleDateString()} - {""}
      {time.toLocaleTimeString()}
    </div>
  );
}
export default ClockTime;

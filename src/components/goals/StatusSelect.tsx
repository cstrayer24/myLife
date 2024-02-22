export default function StatusSelect() {
  return (
    <select name="timeType" id="">
      <option value="none">--select a time frame for goal--</option>
      <option value="urgent">urgent(within the next 2 weeks)</option>
      <option value="near-future">near future(within the next month)</option>
      <option value="future">future(within the next year)</option>
      <option value="lifetime">lifetime</option>
    </select>
  );
}

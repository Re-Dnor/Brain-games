export default function getRandomInt(min = 1, max = 200) {
  const minimalism = Math.ceil(min);
  const maximalism = Math.floor(max);
  return Math.floor(Math.random() * (maximalism - minimalism)) + minimalism;
  // Максимум не включается, минимум включается
}

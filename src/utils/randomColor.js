import { fetchData } from "./helpers";

export default function randomColor() {
  const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
  //generate random hsl color
  return `${existingBudgetsLength * 34} 65% 50%`;
}

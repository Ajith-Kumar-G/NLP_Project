import { score } from "../src/client/js/app";
import { handleSubmit } from "../src/client/js/app";

describe("Testing the submit functionality", () => {
  test("Expect handleSubmit to be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe("Test sentiment score polarity", () => {
  test("Should return 'Positive' for score tag 'P+' or 'P'", () => {
    const scoreTag = "P+" || "P";
    expect(score(scoreTag)).toBe("Positive");
  });

  test("Should return 'Neutral' for score tag 'NEU'", () => {
    const scoreTag = "NEU";
    expect(score(scoreTag)).toBe("Neutral");
  });
});

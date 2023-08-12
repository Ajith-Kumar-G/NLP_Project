import { score } from "../src/client/js/app";
import { handleSubmit } from "../src/client/js/app";
import {validateURL} from "../src/client/js/validateURL";

describe("Testing the url validation functionality", () => {
  test("Expect validateURL to be defined", () => {
    expect(validateURL).toBeDefined();
  });
  describe("Testing the url validation functionality", () => {
    test("Expect validateURL to be defined", () => {
      expect(validateURL).toBeDefined();
    });
  
    test("Valid URLs should return true", () => {
      expect(validateURL("http://www.example.com")).toBeTruthy();
      expect(validateURL("https://www.example.com")).toBeTruthy();
      expect(validateURL("https://subdomain.example.com/path")).toBeTruthy();
    });
  
    test("Invalid URLs should return false", () => {
      expect(validateURL("invalidurl")).toBeFalsy();
      expect(validateURL("htp://www.example.com")).toBeFalsy();
      expect(validateURL("https:/example.com")).toBeFalsy();
    });
  });
});

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


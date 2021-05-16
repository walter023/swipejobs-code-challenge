import {
  monthDayHour,
  roundToOneDecimal,
  convertCentsToDollars,
} from "./index";

describe("roundToOneDecimal", () => {
  test("A float rounds to one decimal", () => {
    const DECIMAL = 3.14159265358979323846264338327;
    expect(roundToOneDecimal(DECIMAL)).toBe(3.1);
  });

  test("The float 3.16 rounds up", () => {
    const DECIMAL = 3.26;
    expect(roundToOneDecimal(DECIMAL)).toBe(3.2);
  });

  test("A string cannot be rounded and returns NaN", () => {
    const DECIMAL = "SomeString";
    expect(roundToOneDecimal(DECIMAL)).toBe(NaN);
  });
});

test("convertCentsToDollars", () => {
  const CENTS = 850;
  expect(convertCentsToDollars(CENTS)).toBe("$8.50");
});

describe("monthDayHour", () => {
  test("Pass 1950 cents to $19.50 dollars", () => {
    const CENTS = 1950;
    expect(convertCentsToDollars(CENTS)).toBe("$19.50");
  });

  test("A string cannot be a currency and returns NaN", () => {
    const CENTS = "No";
    expect(convertCentsToDollars(CENTS)).toBe("$NaN");
  });
});

describe("monthDayHour", () => {
  test("Formats date from the Omny API", () => {
    const START_DATE = "2019-09-04T21:00:00Z";
    const END_DATE = "2019-09-05T05:00:00Z";
    expect(monthDayHour(START_DATE, END_DATE)).toBe(
      "Sep 5 , 07:00 - 15:00 PDT"
    );
  });
});

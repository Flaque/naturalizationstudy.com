export const QUESTIONS_REQUIRING_SEARCH = [20, 23, 28, 29, 40, 43, 46, 47];
export const QUESTIONS_REQUIRING_STATE = [43, 44, 20];
export const YOUR_STATE_SENATORS_QUESTION = 20;
export const YOUR_STATE_GOV_QUESTION = 43;
export const YOUR_STATE_CAPITAL_QUESTION = 44;
export const YOUR_US_REPRESENTATIVE_QUESTION = 23;
export const PRESIDENT_QUESTION = 28;
export const VICE_PRESIDENT_QUESTION = 29;
export const CHIEF_JUSTICE_QUESTION = 40;
export const POLITICAL_PARTY_QUESTION = 46;
export const SPEAKER_OF_THE_HOUSE = 47;
export const INDIAN_QUESTION = 87;
export const SECRETARY_OF_STATE_QUESTION = 36;

// a few states' names don't map "directly" to the corresponding Wikipedia page title
export const STATE_TO_WIKIPEDIA_PAGE_TITLE_OVERRIDE: Record<string, string> = {
  Georgia: "Georgia (U.S. state)",
  "New York": "New York (state)",
  Washington: "Washington (state)",
};

import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util";

describe("generateCode.util", () => {
  it("Genera un código de 6 caracteres", () => {
    const codigo = generateSixDigitCode();
    expect(codigo).toHaveLength(6);
  });

  it("El código solo tiene dígitos", () => {
    const codigo = generateSixDigitCode();
    expect(codigo).toMatch(/^\d{6}$/);
  });
});

import { describe, it, expect, beforeAll } from "vitest";
import { hashPassword, comparePassword } from "../../../src/utils/password.util";

describe("password.util", () => {
  const contraUno = "ClaveUno123";
  const contraDos = "ClaveDos456";
  let hashUno: string;
  let hashDos: string;

  beforeAll(async () => {
    hashUno = await hashPassword(contraUno);
    hashDos = await hashPassword(contraDos);
  });

  describe("Generamos los hashes", () => {
    it("El HashUno no esta vacio y es diferente de la Contraseña Uno", () => {
      expect(typeof hashUno).toBe("string");
      expect(hashUno.length).toBeGreaterThan(0);
      expect(hashUno).not.toBe(contraUno);
    });

    it("El HashDos no esta vacio y es diferente de la Contraseña Dos", () => {
      expect(typeof hashDos).toBe("string");
      expect(hashDos.length).toBeGreaterThan(0);
      expect(hashDos).not.toBe(contraDos);
    });
  });

  describe("Contraseña correcta", () => {
    it("El comparePassword devuelve true en contraUno y hashUno", async () => {
      const resultado = await comparePassword(contraUno, hashUno);
      expect(resultado).toBe(true);
    });

    it("El comparePassword devuelve true en contraDos y hashDos", async () => {
      const resultado = await comparePassword(contraDos, hashDos);
      expect(resultado).toBe(true);
    });
  });

  describe("Contraseña incorrecta", () => {
    it("El comparePassword devuelve false con contraDos y hashUno", async () => {
      const resultado = await comparePassword(contraDos, hashUno);
      expect(resultado).toBe(false);
    });

    it("comparePassword devuelve false con contraUno y hashDos", async () => {
      const resultado = await comparePassword(contraUno, hashDos);
      expect(resultado).toBe(false);
    });
  });
});
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_class_1 = __importDefault(require("./CustomError.class"));
exports.default = async (err, c) => {
  try {
    const supabase = c.get("SERVICE_CLIENT");
    if (err instanceof CustomError_class_1.default) {
      await err.saveErrorToDatabase(
        supabase,
        c.req.headers.get("cf-connecting-ip"),
        c.req.path,
      );
      return err.getResponseObject(c);
    } else {
      // if its not CustomError
      await supabase.from("errors").insert({
        code: "unknown",
        data: err?.message,
      });
      return c.json({ status: "error", message: err?.message }, 500);
    }
  } catch (err) {
    // if something goes wrong, when handling error
    return c.text("!Internal Server Error", 500);
  }
};

"use server";

type CharFormData = {
  text: string;
  includeSpace: boolean;
};

export async function countChar(formData: CharFormData) {
  const isCountSpace = formData["includeSpace"];
  const text = formData["text"];

  if (isCountSpace) {
    return text.length;
  } else {
    const trimmedText = text.replace(/\s+/g, "");
    return trimmedText.length === 0 ? 0 : trimmedText.length;
  }
}
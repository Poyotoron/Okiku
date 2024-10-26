"use server";

type CharFormData = {
    text: string;
    includeSpace: boolean;
  };

export async function countChar(formData: CharFormData) {
    const isCountSpace = formData["includeSpace"];
    // const text = formData["text-char"];

    if (isCountSpace) {
        return 100;
    } else {
        return 200;
    }
}
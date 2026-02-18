type QuoteRequest = {
  name: string;
  email: string;
  phone: string;
  quoteType: string;
  contactMethod: string;
};

function formatTimestamp(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const month = parts.find((part) => part.type === "month")?.value ?? "00";
  const day = parts.find((part) => part.type === "day")?.value ?? "00";
  const hour = parts.find((part) => part.type === "hour")?.value ?? "00";
  const minute = parts.find((part) => part.type === "minute")?.value ?? "00";
  return `${month}/${day} ${hour}:${minute}`;
}

export const onRequestPost: PagesFunction = async (context) => {
  const contentType = context.request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded")) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid content type" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const formData = await context.request.formData();
  const payload: QuoteRequest = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    quoteType: String(formData.get("quoteType") ?? "").trim(),
    contactMethod: String(formData.get("contactMethod") ?? "").trim(),
  };

  if (!payload.name || !payload.email || !payload.phone) {
    return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const timestamp = formatTimestamp(new Date());
  const subject = `NEW QUOTE NOTIF - ${payload.name} - ${timestamp}`;

  return new Response(
    JSON.stringify({
      ok: true,
      to: "alchemyboston@gmail.com",
      subject,
      payload,
      placeholder: "Connect this function to your email provider and database.",
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    },
  );
};

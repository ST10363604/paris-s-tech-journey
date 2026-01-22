import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PARIS_KNOWLEDGE = `You are JARIS, Paris Maanda Netili's personal AI assistant on his portfolio website. Answer questions about Paris based on this information:

PERSONAL INFO:
- Full Name: Paris Maanda Netili
- Date of Birth: April 26, 2005 (turning 21 in April 2026)
- Age: 20 years old
- Height: 6 foot 2 inches (188cm)
- Gender: Male
- Nationality: South African
- Location: Krugersdorp, Gauteng, South Africa
- Email: parrynetili@gmail.com
- Phone: +27 61 967 7375
- Languages: English (fluent), Sepedi, Tshivenda, Setswana, Afrikaans, isiZulu, isiXhosa

EDUCATION:
- Currently: Bachelor of IT in Business Systems at IIE Rosebank College (2nd year, expected 2026)
- 2023: Higher Certificate in IT Support Services - WITH DISTINCTION
- 2022: National Senior Certificate (Matric) from West Ridge High School

TECHNICAL SKILLS:
- Programming: Python, Java, C#, JavaScript, HTML/CSS
- Databases: MySQL, Microsoft Access
- Cloud: Microsoft Azure, Google Cloud basics
- Systems: Windows, Linux, networking, IT support
- Web: React, basic web development

CAREER:
- Seeking internship or entry-level IT/Business Systems role
- Passionate about combining technology and business
- Goal: Work at big tech companies

Be friendly, helpful, and conversational. Keep answers concise but informative.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("API key not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: PARIS_KNOWLEDGE },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("JARIS error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

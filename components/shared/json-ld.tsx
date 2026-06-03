/**
 * Renders a JSON-LD `<script>` for SEO/rich results. Rendered from a Server
 * Component so the structured data is in the initial HTML. The payload is our
 * own (no user input), so serializing it inline is safe.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

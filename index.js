export const COLORS = {
  bg: '#0A0A08',
  surface: '#111110',
  surface2: '#1A1A18',
  border: 'rgba(255,255,255,0.06)',
  border2: 'rgba(255,255,255,0.10)',
  text: '#EDEAE2',
  muted: '#7A7A72',
};

export const MODEL_META = {
  Claude:   { icon: '◈', color: '#3A5A8A' },
  Grok:     { icon: '⚡', color: '#5A3A8A' },
  ChatGPT:  { icon: '◯', color: '#3A7A4A' },
  Gemini:   { icon: '✦', color: '#7A5A2A' },
  DeepSeek: { icon: '⊕', color: '#8A4A3A' },
};

export const API_URL = 'https://votum.ink/.netlify/functions/analyze-multi';

export function scoreColor(s) {
  if (s >= 70) return '#5A9A6A';
  if (s >= 50) return '#8A9A6A';
  if (s >= 35) return '#9A7A4A';
  return '#B85A5A';
}

export function spreadColor(s) {
  if (s < 15) return '#3A7A4A';
  if (s < 30) return '#7A7A4A';
  if (s < 45) return '#8A4A3A';
  return '#8A3A6A';
}

export function spreadLabel(s) {
  if (s < 15) return 'Strong consensus';
  if (s < 30) return 'Partial consensus';
  if (s < 45) return 'Models debate this';
  return 'Five minds, no consensus';
}

export function timeAgo(d) {
  const diff = Math.floor((Date.now() - new Date(d)) / 60000);
  if (diff < 60) return diff + 'm ago';
  if (diff < 1440) return Math.floor(diff / 60) + 'h ago';
  return Math.floor(diff / 1440) + 'd ago';
}

export const SEED_HEADLINES = [
  {
    id: '1',
    headline: "US economy adds 250,000 jobs — but wage growth slows for third straight month",
    source: "Reuters",
    publishedAt: new Date(Date.now() - 1800000).toISOString(),
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    models: [
      { model: 'Claude',   overall: 83 },
      { model: 'ChatGPT',  overall: 80 },
      { model: 'Grok',     overall: 84 },
      { model: 'Gemini',   overall: 92 },
      { model: 'DeepSeek', overall: 89 },
    ],
    signal: 'Five minds agree — credible, well-sourced economic reporting.',
    spreadVal: 12,
  },
  {
    id: '2',
    headline: "Biden's disastrous border policy has destroyed America",
    source: "Breitbart",
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    image: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&q=80",
    models: [
      { model: 'Claude',   overall: 16 },
      { model: 'ChatGPT',  overall: 25 },
      { model: 'Grok',     overall: 22 },
      { model: 'Gemini',   overall: 10 },
      { model: 'DeepSeek', overall: 22 },
    ],
    signal: 'All five agree — maximalist framing, zero evidence, advocacy not journalism.',
    spreadVal: 15,
  },
  {
    id: '3',
    headline: "Israel commits genocide in Gaza as world looks away",
    source: "The Intercept",
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    image: "https://images.unsplash.com/photo-1647452457953-b9af46774bc5?w=800&q=80",
    models: [
      { model: 'Claude',   overall: 30 },
      { model: 'ChatGPT',  overall: 50 },
      { model: 'Grok',     overall: 34 },
      { model: 'Gemini',   overall: 23 },
      { model: 'DeepSeek', overall: 33 },
    ],
    signal: 'Contested legal claim as fact. DeepSeek alone rates center-left — divergence is signal.',
    spreadVal: 27,
  },
  {
    id: '4',
    headline: "Republicans block life-saving healthcare for millions of Americans",
    source: "Unknown",
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    models: [
      { model: 'Claude',   overall: 20 },
      { model: 'ChatGPT',  overall: 58 },
      { model: 'Grok',     overall: 28 },
      { model: 'Gemini',   overall: 45 },
      { model: 'DeepSeek', overall: 40 },
    ],
    signal: 'Wide spread — Claude and Grok flag loaded language. Left perspective, contested framing.',
    spreadVal: 38,
  },
  {
    id: '5',
    headline: "Climate change: the greatest hoax ever perpetrated on mankind",
    source: "Unknown",
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    models: [
      { model: 'Claude',   overall: 8  },
      { model: 'ChatGPT',  overall: 12 },
      { model: 'Grok',     overall: 15 },
      { model: 'Gemini',   overall: 5  },
      { model: 'DeepSeek', overall: 18 },
    ],
    signal: 'Near-zero unanimous scores. All five identify science denial with no evidence.',
    spreadVal: 13,
  },
];

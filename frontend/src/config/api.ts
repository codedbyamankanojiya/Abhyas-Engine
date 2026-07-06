// Configuration for API and WebSocket endpoints
const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');

// Deriving the WebSocket URL: replace http/https with ws/wss
const getWsBaseUrl = (url: string) => {
  if (url.startsWith('https://')) {
    return url.replace('https://', 'wss://');
  }
  if (url.startsWith('http://')) {
    return url.replace('http://', 'ws://');
  }
  // If it's a relative path or host-only, fallback to standard protocol conversion
  return url.replace(/^http/, 'ws');
};

const WS_BASE_URL = getWsBaseUrl(API_BASE_URL);

export const API_ENDPOINTS = {
  baseUrl: API_BASE_URL,
  sectionData: `${API_BASE_URL}/api/section-data`,
  questions: (roleId: string, level: string) => `${API_BASE_URL}/api/questions/${roleId}?level=${level}`,
  questionTranscript: `${API_BASE_URL}/api/question-transcript`,
  roles: `${API_BASE_URL}/api/roles`,
  visionSession: `${API_BASE_URL}/api/vision-session`,
  sttWs: `${WS_BASE_URL}/ws/stt`,
  recalculateQuality: `${API_BASE_URL}/api/recalculate-answer-quality`,
  aiAnalysis: `${API_BASE_URL}/api/ai-analysis`,
  semanticAnalysis: `${API_BASE_URL}/api/semantic-analysis`
};

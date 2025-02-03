const API_URL = import.meta.env.VITE_API_BASE_URL

export const getPodcastEpisodes = async (showId) => {
    const response = await fetch(`${API_URL}/api/episodes/${showId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    return await response.json();
};
  
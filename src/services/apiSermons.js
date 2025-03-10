const API_URL = import.meta.env.VITE_API_BASE_URL

export async function getPodcastEpisodes (showId)  {
    const response = await fetch(`${API_URL}/api/episodes/${showId}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    const data = await response.json();
    return await data;
};

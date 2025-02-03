import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes } from "../../services/apiSermons";



export function useGetSermons() {

    const showId = import.meta.env.VITE_SPOTIFY_SHOW_ID;

  const { isPending: isLoadingSermons, data: sermons, isError, error } = useQuery({
    queryKey: ["get-sermons", showId],
    queryFn:   () => getPodcastEpisodes(showId),
  });
  return {
    isLoadingSermons,
    isError,
    error,
    sermons,
  };
} 

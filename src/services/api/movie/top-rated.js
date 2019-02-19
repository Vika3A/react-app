import { apiService } from '../api-service';

export async function getTopMovieList (page) {
    const request = await apiService.get(`/movie/top_rated?page=${page}`);

    return await request.json();
}

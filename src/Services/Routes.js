import { lazy } from 'react'

export const url = {
    home: '/',
    movies: '/MoviesPage',
    favoriteMovies: '/FavoriteMovies'
}

// ЗАПОМНИ КАК ПРАВИЛЬНО ЗАПИСЫВАЕТСЯ lazy 

export const routes = [
    {
        path: url.home,
        exact: true,
        component: lazy(() => import('../Component/HomePage/HomePage'))
    },
    {
        path: url.movies,
        exact: true,
        component: lazy(() => import('../Component/MoviesPage/MoviesPage'))
    },
    {
        path: url.movies + '/:movieId',
        exact: false,
        component: lazy(() => import('../Component/MovieDetailsPage/MovieDetailsPage'))
    },
    {
        path: url.favoriteMovies,
        exact: true,
        component: lazy(() => import('../Component/FavoriteMovies/FavoriteMovies'))
    }
]
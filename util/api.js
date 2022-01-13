/* eslint-disable react-hooks/rules-of-hooks */

import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable'

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

const fetcher = url => fetch(url).then(res => res.json())

export async function apiRequest(path, method = "GET", data) {
    const res = await fetch(`${API_SERVER}/api/${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export function getSpecies() {
    const url = `/api/species`
    const { data: species, error: errorSpecies } = useSWR(url, fetcher, { revalidateOnFocus: false });
    return { species, errorSpecies }
}

export function getArtworks() {
    const url = `/api/artworks`
    const { data: artworks, error: errorArtworks } = useSWR(url, fetcher, { revalidateOnFocus: false });
    return { artworks, errorArtworks }
}
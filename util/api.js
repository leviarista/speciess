/* eslint-disable react-hooks/rules-of-hooks */

import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable'

const fetcher = url => fetch(url).then(res => res.json())

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
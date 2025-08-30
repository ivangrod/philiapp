import { Pokemon } from '@philiapp/shared-types';

async function getPokemons(): Promise<Pokemon[]> {
  const res = await fetch('http://localhost:3333/pokemons', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error when obtain pokemons list');
  return res.json();
}

export default async function PokemonList() {
  const pokemons = await getPokemons();

  return (
    <ul className="bg-white rounded-lg shadow p-6 space-y-2 max-w-md mx-auto">
      {pokemons.map((pokemon)=> {
        return <li key={pokemon.id} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded text-indigo-700 font-semibold hover:bg-indigo-200 transition">{pokemon.name.english}</li>;
      })}
    </ul>
  );
}
